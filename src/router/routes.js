import ForbiddenPage from "../pages/forbidden";
import MainPage from "../pages/main-page/index.jsx";
import Not_foundPage from "../pages/not-found";
import ProductPage from "../pages/product";
import ProfilePage from "../pages/profile";
import paths from "./utils/paths.js"

const routes =[
     
    {
        name:'INDEX',
        path : paths.INDEX,
        component: MainPage,
        exact :true,
        needAuth:false,
    },
    {
        name:'PROFILE',
        path : paths.PROFILE,
        component: ProfilePage,
        exact :true,
        needAuth:true,
    },
    {
        name:'PRODUCT',
        path : paths.PRODUCT,
       component:ProductPage,
        exact :true,
        needAuth:false,
    },
  
    {
        name:'FORBIDDEN',
        path : paths.FORBIDDEN,
        component:ForbiddenPage,
        exact :true,
        needAuth:false,
    },
    {
        name:'NOT_FOUND',
        path : paths.NOT_FOUND,
        component: Not_foundPage,
        exact :true,
        needAuth:false,
    },
 
];
export default routes
