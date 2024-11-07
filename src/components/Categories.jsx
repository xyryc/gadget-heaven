import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col p-6 gap-6 border rounded-2xl">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `btn rounded-[32px] ${
              isActive ? "bg-[#9538E2] text-white" : "text-gray-600"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
