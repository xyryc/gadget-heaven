import { NavLink } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto relative">
      <div className="bg-[#9538E2]  text-center text-white pt-12  pb-[268px] md:rounded-b-[32px] px-2 mb-36 sm:mb-56 lg:mb-[490px]">
        <h1 className="text-[56px] font-bold mb-6">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mb-8 sm:w-3/5 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <NavLink to="./dashboard" className="btn rounded-[32px] text-[#9538E2]">
          Shop Now
        </NavLink>
      </div>

      <div className="absolute -bottom-28 sm:-bottom-40 md:-bottom-64 lg:-bottom-[340px] 2xl:-bottom-[500px] rounded-[32px] p-6 border mx-4 lg:mx-52 backdrop-blur-3xl">
        <img
          className="rounded-3xl object-cover"
          src={BannerImage}
          alt="banner image"
          style={{ objectPosition: "center bottom" }}
        />
      </div>
    </div>
  );
};

export default Banner;
