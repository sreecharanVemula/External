import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Root from './components/Root'
import Navbar from './components/Navbar';
import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Root/>,
      children:[
        {
            path:'',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/registration',
          element:<Registration/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        
        
        
        
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
