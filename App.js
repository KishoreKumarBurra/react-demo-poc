import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
//import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: (<Suspense fallback={<h1>Loading..!!</h1>}><About /></Suspense> ) },
      { path: "/contact", element: (<Suspense fallback={<h1>Loading..!!</h1>}><Contact /></Suspense> ) },
      { path: "/grocery", element: (<Suspense fallback={<h1>Loading..!!</h1>}><Grocery /></Suspense> )},
      { path: "/restaurants/:resId", element: <RestaurantMenu />}
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
