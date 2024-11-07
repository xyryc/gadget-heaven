import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import ErrorImage from "../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="text-center container mx-auto px-4 font-sora">
      <Helmet>
        <title>Error 404 | Gadget Heaven</title>
      </Helmet>

      <Navbar></Navbar>

      <div>
        <img className="mx-auto" src={ErrorImage} alt="Error 404" />
        <h1 className="text-6xl text-red-500">Page not found!</h1>
        <NavLink to="/" className="btn mt-8 btn-outline rounded-[32px]">
          Go To Home
        </NavLink>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
