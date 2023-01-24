import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import ROUTES from './Routes/route';
const router=createBrowserRouter(ROUTES)
function App() {
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
