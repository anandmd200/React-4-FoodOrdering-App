const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtPqz9zuJd9oZAPiPaetjYdr4Jiyc1heg5g&usqp=CAU"
        alt="Logo"
      />
    </a>
  );
};

const Header = () => (
  <div className="header-container">
    <Title />
    <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
export default Header;