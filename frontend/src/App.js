import React from 'react';
import { createBrowserRouter , Router, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Announcement from './components/Announcement';
import SignUpForm from './components/SignUp';
import Home from './components/Home';


// function Home() {
//   return <h1>Home Page</h1>; 
// }

// function About() {
//   return <h1>About Page</h1>; 
// }

function App() {
  return (
      <div>
        <Navbar />
        <Outlet/>
      </div>
  );
}
const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
          // {
          //     path:"/",
          //     element:<Navbar/>
          // },
          // {
          //     path: "/About",
          //     element: <About/>,
             
          // },
          {
              path:"/dashboard",
              element:<Dashboard/>
              
          },
          {
            path:"/announcement",
            element:<Announcement/>
            
        },
        {
          path:"/profile",
          element:<SignUpForm/>
          
        },
        {
          path:"/home",
          element:<Home/>
          
        },
        

      ],
      // errorElement:<Error/>
  },
]
)

export default appRouter;

