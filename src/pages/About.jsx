import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <Helmet>
        <title>About Us | Gadget Heaven</title>
      </Helmet>

      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <img
            src="https://i.ibb.co.com/bQS2gd0/Mac-Book-Pro-M2-Pro.jpg"
            alt="Gadgets Showcase"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Gadget Heaven, we aim to make the latest tech accessible to
              everyone. Our goal is to provide a unique shopping experience that
              is tailored to your needs, with an emphasis on quality,
              innovation, and customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From smart devices to cutting-edge accessories, we strive to offer
              a carefully curated selection that suits tech enthusiasts and
              casual buyers alike.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="my-16">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Values or features */}
            {[
              {
                title: "Quality Assurance",
                description:
                  "All products are rigorously tested to ensure top quality.",
              },
              {
                title: "Customer Support",
                description: "Our dedicated team is here to help you 24/7.",
              },
              {
                title: "Innovative Products",
                description:
                  "We bring the latest innovations from top tech brands.",
              },
              {
                title: "Secure Payments",
                description:
                  "We prioritize your security with trusted payment options.",
              },
              {
                title: "Fast Shipping",
                description:
                  "Quick and reliable shipping for a seamless experience.",
              },
              {
                title: "Satisfaction Guarantee",
                description:
                  "We stand by our products with a satisfaction guarantee.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-[#9538E2] text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is passionate about technology and dedicated to
            delivering an exceptional shopping experience.
          </p>
          <div className="flex justify-center gap-8 drop-shadow-md">
            {[
              {
                name: "Mohammad Anik",
                role: "CEO & Founder",
                image: "https://i.ibb.co.com/7YSvbxv/anik.jpg",
              },
              {
                name: "Jawed Karim",
                role: "Lead Developer",
                image:
                  "https://i.ibb.co.com/jL5P1zz/jawed-karim-married-status-now.webp",
              },
              {
                name: "Sarah Lee",
                role: "Customer Support",
                image: "https://i.ibb.co.com/yWLr9nh/pexels-photo-28570314.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Find Your Next Gadget?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our wide selection and experience the future of technology
            with Gadget Heaven.
          </p>
          <NavLink
            to="/"
            className="btn rounded-[32px] bg-[#9538E2] text-white px-8 py-3 shadow-lg hover:bg-[#7f2fbb] transition"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
