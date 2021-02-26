import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddProductToAction, IncreaseCounterAction } from '../../../store/cart/action.js';
import Loading from '../loading/index.jsx';
import { getMockProduct, getProductById } from './server.jsx'

import styles from './style.module.css'




const ProductList = () => {
    
    const [ productList , setProductList] = useState([]);
    const [ isLoading , setIsLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        getDataFromApi()
    },[]);

    const  getDataFromApi = async() =>{
        const response = await getMockProduct();
        setProductList( response);
        setIsLoading(false)
        }

    const productsIn = useSelector( (state) => state.productsInCard)

    const addToCart = (product) => {
        if (!productsIn.includes(product)) {
            dispatch ( AddProductToAction(product))
            dispatch(IncreaseCounterAction(2))
        }
        console.log();
   
        
    };
         const renderProduct = () => {   
         
            if(isLoading){
                return  <div className={styles.loadingBack}>
                    <Loading />
                    </div>
            }
            return (<>
                <div className={styles.products}>
                    <div>
                        {productList.map((product,index) => {
                         
                            return (
                                // <Link to={`/product/${product.id}`}>
                                <div  key={index} className={styles.productName}>
                                <div>{product.name}</div>
                             
                                <div>{product.price}</div>
                                <button className={styles.addCardBtn} 
                                onClick={() => addToCart(product)}>add to cart</button>
                                {product.hasOf && <div>sal</div>}
                            </div>
                            // </Link>
                            )
                          
                        })}
                    </div>
                </div>
            </>
            )};   
            return <> {renderProduct()} </>
      
}

    export default ProductList