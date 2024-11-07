import { Outlet, useLoaderData } from "react-router-dom";

import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>

      <h2 className="font-bold text-[40px] text-center mb-11">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="sm:grid grid-cols-12 gap-6">
        <div className="sm:col-span-3 lg:col-span-2">
          <Categories categories={categories} />
        </div>

        <div className="sm:col-span-9 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
