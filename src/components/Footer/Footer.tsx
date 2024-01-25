const Footer = () => {
  return (
    <footer className="h-64 bg-gray-900 px-8 py-6 text-white ">
      <p>Contacts:</p>
      <ul className="flex text-gray-400 flex-col gap-0.5 mb-5 mt-2">
        <a href="tel:+380123456789">+380123456789</a>
        <a href="mailto:justpizza@mail.com">justpizza@mail.com</a>
      </ul>
      <a
        href="/"
        className="font-semibold text-lg flex items-center gap-2 uppercase"
      >
        <img src="food-pizza_115113.svg" className="h-6" /> Just Pizza!
      </a>
    </footer>
  );
};

export default Footer;
