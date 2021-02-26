import React from 'react';
import './style.css';
import NavBarItem from  './nav-bar-item/index.jsx'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const navBarItem = {
    HOME: 'home',
    CART :'cart',
    PROFILE:'profile'
}


const NavBar = (props) => {
   const handleONHomeClick = () => {
        //   test
    
        }
    const handleONCartClick = (ItemName) => {
        const {onItemClick} = props
        onItemClick(ItemName)

    }
    const handleONProfileClick = () => {
    //   test
    }
        
     const   handelOnNavBarItemClick= (ItemName) => {
            if(ItemName === navBarItem.HOME){
               handleONHomeClick();
    
            }
            if(ItemName === navBarItem.CART){
               handleONCartClick(ItemName);
    
            }
            if(ItemName === navBarItem.PROFILE){
                handleONProfileClick();
    
            }
        };

    const cartItem =useSelector(state => state.productsInCard )
    return (
        <div className='nav-bar'>
            <Link to="/">
            <NavBarItem 
          onClickItem = { () => handelOnNavBarItemClick(navBarItem.HOME)}
            >
                         home
                     </NavBarItem>
            </Link> 

             <Link to ="/">
             <NavBarItem 
             onClickItem = { () => handelOnNavBarItemClick(navBarItem.CART)}>
                 cart ({cartItem && cartItem.length})
             </NavBarItem>
             </Link>

             <Link to="/profile">
             <NavBarItem 
             onClickItem = { () => handelOnNavBarItemClick(navBarItem.PROFILE)}  
             >profile</NavBarItem> 
             </Link>
             
         </div>
     ) 
}


export default NavBar;