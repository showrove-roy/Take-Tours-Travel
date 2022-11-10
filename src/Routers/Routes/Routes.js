import { createBrowserRouter } from "react-router-dom";
import Error404 from "../../Components/Error404/Error404";
import Home from "../../Components/Home/Home";
import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails";
import Services from "../../Components/Services/Services";
import Login from "../../Components/Sign In-Up/Login";
import SignUp from "../../Components/Sign In-Up/SignUp";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);

export default router;
