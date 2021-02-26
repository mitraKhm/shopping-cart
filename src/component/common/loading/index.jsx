import react from 'react';
import './style.css';



class Loading extends react.Component{
    render(){
        return (
            <>
            <div className="lds-circle"><div></div></div>
            </>
        )
    }

}

export default Loading