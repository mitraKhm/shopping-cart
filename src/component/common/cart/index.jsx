import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'; 


const Cart = (props) => {
   const removeFromCart = (productItem) =>{
        // this.props.onItemRemove && 
        props.onItemRemove(productItem)

    }
    const selectedCarts = useSelector(state => state.productsInCard)
    console.log('in cart',selectedCarts);

    const{showCart}= props
    if (showCart) {
        return (
           props.list.map((productItem) => {
                 return (
                <div key={productItem.id} className='cart'>                  
                    <p>{productItem.name}</p>
                    <div>cart</div>
                    <p>{productItem.price}</p>
                     {productItem.hasOf && <p>sale</p>}
                  <button 
                  className='removeCart' 
                  onClick={() => removeFromCart(productItem)}>remove cart</button>
                </div>
                )
        })
        )
    }
    return  null;
    // (
    //     <div className ='noCart' >
    //         <div className ='noCartMa'>
    //             there is  no cart to buy!
    //             </div> 
        
    //     </div>
    // );
}
export default Cart