import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-1">
        <img src="images/flipkart_img.png" alt="" />
        <a href="#" style={{ textDecoration: "none" }}>
          {" "}
          Explore Plus+
        </a>
      </div>
      <ul type="none" className="Navbar-2">
        <li>
          <input
            type="search"
            placeholder="Search for Products,Brands and More"
          />
        </li>
        <li>
          <button className="login">Login</button>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            Become a Seller
          </a>
        </li>
        <li>Menu</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Navbar;
