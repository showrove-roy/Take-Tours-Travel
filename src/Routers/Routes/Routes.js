import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Components/AddService/AddService";
import Blogs from "../../Components/Blogs/Blogs";
import Editreview from "../../Components/Editreview/Editreview";
import Error404 from "../../Components/Error404/Error404";
import Home from "../../Components/Home/Home";
import MyReview from "../../Components/MyReview/MyReview";
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
        loader: () => fetch("http://localhost:5000/services?limit=3"),
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/services"),
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/myreviews",
        element: <MyReview></MyReview>,
      },
      {
        path: "/editreview/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/single-review/${params.id}`),
        element: <Editreview></Editreview>,
      },
      {
        path: "/addservices",
        element: <AddService></AddService>,
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
