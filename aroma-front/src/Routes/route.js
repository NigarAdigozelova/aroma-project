import MainRoot from "../components/MainRoot";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Pages from "../pages/Pages";
import Shop from "../pages/Shop";

const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'pages',
                element:<Pages/>
            },
            {
                path:'shop',
                element:<Shop/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
]
export default ROUTES