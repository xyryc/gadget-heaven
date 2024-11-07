/* eslint-disable react/prop-types */
const Header = ({ title, description }) => {
  return (
    <div className="text-center pb-8 bg-[#9538E2] text-white pt-8">
      <h1 className="font-bold text-[32px] mb-4">{title}</h1>
      <p className="md:w-3/5 mx-auto">{description}</p>
    </div>
  );
};

export default Header;
