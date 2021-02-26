import react from 'react';
import { getProductById } from '../../component/common/product-list/server';


class ProductPage extends  react.Component{
    constructor(props){
        super(props)
        this.state={
            data : null,
            isLoading:true,
        }
    }
    componentDidMount(){
        this.getProductData();
    }
    getProductData = async () => {
        
       const { routeProps } = this.props;     
       const { match } = routeProps;
       const { params } = match;
        try{
            const data = await getProductById(Number (params.name));
            this.setState({
                data,
            })
        }catch (e) {
            alert('product not found')
        }finally{
            this.setState({
                isLoading:false,
            })
        }
    
    };
    render(){
        const{isLoading,data}=this.state;
        return(
            <div>
                 {isLoading && <div>isLoading</div>} 
                 <p>{data && data.id}</p>
                 <p>{data && data.name}</p>
                 <p>{data && data.price}</p>
                {data && data.hasOf && <p>has of</p>}
            </div>
            )
    }
};
export default ProductPage;