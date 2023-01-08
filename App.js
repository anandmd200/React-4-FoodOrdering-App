import React from "react";
import ReactDOM from "react-dom/client";

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

//js object

const BurgerKing = {
  imageUrl:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/julctxazn0y2oy6mgkeq",
  Name: "BurgurKing",
  cuisines: ["American", "Snacks", "Biryani"],
  rating: "4.2",
};

const ResturantCard = () => {
  return (
    <div className="card">
      <img src={BurgerKing.imageUrl} alt="" />
      <h1>{BurgerKing.Name}</h1>
      <h3>{BurgerKing.cuisines.join(",")}</h3>
      <h2>{BurgerKing.rating}</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturant-list">
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard /> 
      <ResturantCard />
    </div>
  );
};

const Footer = () => {
  return <h1>Footer Component</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
