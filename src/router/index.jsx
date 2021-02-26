import react from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import checkAuth from '../auth/checkAuth';
import routes from './routes';

const token= checkAuth(true);

class RouterProvider extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated : null,
        };
    
    }
    componentDidMount(){
        setTimeout(() =>{
            if(token){
                this.setState({
                    isAuthenticated :true,
                })

            }else{
                this.setState({
                    isAuthenticated :false,
                });

            }
        },2500)

    }
    handleRouteEnter = (route , props) => {
      const { isAuthenticated} = this.state;
     if(isAuthenticated ){
       return <route.component routProps={props} />
     }else {
         return <Redirect to="/401" />

     }
       
    }
    render() {
        return( 
            <BrowserRouter>
                <Switch>
                    {routes.map((route ,index) => (                       
                        <Route path={route.path} exact={route.exact} key={index}>
                    { (props) => {
                        
                       return route.needAuth ? ( 
                           this.handleRouteEnter(route ,props)) : (
                           <route.component routeProps={props} /> )
                    }
                    }                   
                     </Route>
                     ))};
                </Switch>
            </BrowserRouter>
         );
    }
   
}
export default RouterProvider;