import "../styles/header.css";

function Header() {
  return (
    <div>
      <ul type="none" className="header">
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/grocery.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Groceries</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/mobiles.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Mobiles</p>
        </li>
        <li>
          <a href="" style={{ textDecoration: "none" }}>
            <img
              src="images/fashion.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Fashion</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/electronics.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Electronics</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/home&furniture.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Home and Furniture</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/Appliances.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Appliances</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/travel.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Travel</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/toys.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Toys</p>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              src="images/two_wheelers.png"
              alt=""
              style={{ width: "5vw", height: "10vh" }}
            />
          </a>
          <p>Two-wheelers for sale</p>
        </li>
      </ul>
    </div>
  );
}

export default Header;
