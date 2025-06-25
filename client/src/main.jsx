import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tokenverification from "./components/Tokenverifcation";
import Contact from "./components/Contact";
import Error from "./components/Error";
import App from "./App";
import Body from "./components/Body";
import Login from "./components/Login";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

const About = lazy(() => import("./components/ABout"))
const root = ReactDOM.createRoot(document.getElementById("root"));

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,



    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/body",
        element: (
          <Tokenverification>
            <Body />
          </Tokenverification>
        )
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Tokenverification>
              <About />
            </Tokenverification>

          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Tokenverification>
            <Contact />,
          </Tokenverification>
        )
      },
      {
        path: "restarauntdetail/:resid",
        element: (
          <Tokenverification>
            <RestaurantDetail />,
          </Tokenverification>
        )

      },
      {
        path: "cart",
        element: (
          <Tokenverification>
            <Cart />,
          </Tokenverification>
        )
      },
      {
        path:"profile",
        element:(
          <Tokenverification>
            <Profile/>
          </Tokenverification>
        )
      }
    ],
  },
]);

root.render(<RouterProvider router={approuter}></RouterProvider>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an aneportWebVitals();
