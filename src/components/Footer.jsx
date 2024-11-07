const Footer = () => {
  return (
    <footer className="py-24 text-center">
      <div>
        <h1 className="text-[32px] font-bold mb-3">Gadget Heaven</h1>
        <p className="font-medium text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      
      <div className="border-t my-8"></div>

      <div className="md:flex justify-center gap-40">
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <p className="text-gray-600 mb-2">Product Support</p>
          <p className="text-gray-600 mb-2">Order Tracking</p>
          <p className="text-gray-600 mb-2">Shipping & Delivery</p>
          <p className="text-gray-600 mb-2">Returns</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <p className="text-gray-600 mb-2">About Us</p>
          <p className="text-gray-600 mb-2">Careers</p>
          <p className="text-gray-600 mb-2">Contact</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <p className="text-gray-600 mb-2">Terms of Service</p>
          <p className="text-gray-600 mb-2">Privacy Policy</p>
          <p className="text-gray-600 mb-2">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
