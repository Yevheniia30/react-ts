const Header = () => {
  return (
    <header className="h-12 shadow-xl px-6 flex items-center">
      <a
        href="/"
        className="font-semibold uppercase text-lg flex items-center gap-2"
      >
        <img src="food-pizza_115113.svg" className="h-6" />
        Just Pizza!
      </a>
    </header>
  );
};

export default Header;
