import react, { useState } from 'react'
import Header from '../../component/layout/header/index.jsx'
import Footer from '../../component/layout/footer/index.jsx'
import NavBar from '../../component/common/nav-bar/index.jsx'
import Products from '../../component/common/product-list/index'
import Cart from '../../component/common/cart/index'
import Styles from './style.module.css';
// import { render } from 'sass';
const navBarItem = {
  HOME: 'home',
  CART: 'cart',
  PROFILE: 'profile'
}
const MainPage = () => {

  const [addToCartList, setAddToCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleRemoveProduct = (productItem) => {
    const newList = addToCartList.filter(product => {
      return product.id !== productItem.id
    });
    setAddToCartList(newList)

  }
  const handleProductSelected = (productItem) => {
    setAddToCartList((prevState) => {
      if (!prevState.includes(productItem)) {
        return [...prevState, productItem];
      } return [...prevState]
    });
  };

  const handleONHomeClick = () => {
  };

  const handleONCartClick = (itemName) => {
    setShowCart((prevState) => !prevState)
  };
  const handleONProfileClick = () => {
    //  test
  }
  const handleOnNavBarItemClick = (itemName) => {
    if (itemName === navBarItem.HOME) {
      handleONHomeClick();

    }
    if (itemName === navBarItem.CART) {
      handleONCartClick(itemName);

    }
    if (itemName === navBarItem.PROFILE) {
      handleONProfileClick();

    }
  }
  return (
    <>
      <Header>
        <NavBar
          onItemClick={(itemName) => handleOnNavBarItemClick(itemName)}
          cartCountNumber={addToCartList.length} />
      </Header>

       <Cart
        list={addToCartList}
        onItemRemove={handleRemoveProduct}
        showCart={showCart} />
        
      <div className={Styles.container}>
        <Products onProductSelected={handleProductSelected} />
      </div>
      <Footer />
    </>
  );

};

export default MainPage;
