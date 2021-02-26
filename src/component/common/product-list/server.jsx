const mockProducts =[
    {
        id:1 ,
        name :'product one',
        price :2000 ,
        hasOf :true,
    },
    {
        id:2 ,
        name :'product tow',
        price :3000 ,
        hasOf :false,
    },
    {
        id:3 ,
        name :'product three',
        price : 4000,
        hasOf :true,
    },
   
    {
        id:4 ,
        name :'product four',
        price : 6200,
        hasOf :false,
    }
    ,
    {
        id:5 ,
        name :'product five',
        price : 4000,
        hasOf :true,
    }
    ,
    {
        id:6 ,
        name :'product six',
        price : 78000,
        hasOf :false,
    }

];
const getMockProduct = () => 
    new Promise((resolve, reject) => 
        setTimeout(() =>{
            resolve(mockProducts)
            
        },1)
    );

const getProductById = (id) => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        const products = mockProducts.filter((product) => product.id === id);
        if(products[0]){
            resolve(products[0]);
        }else{
            reject('no product fond')
        }
    
    },1000)

});


export {getMockProduct ,getProductById , mockProducts}
