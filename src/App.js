import "./styles.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Content1 from "./components/content1";
import Beauty from "./components/beauty";
import Specials from "./components/specials";
import { Row, Col, Container } from "reactstrap";
import Become_seller from "./components/seller.jsx";
import Cart from "./components/cart";
export default function App() {
  return (
    <div>
      {/* <Navbar></Navbar>
      <div className="header_component">
        <Header></Header>
      </div>
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20"
        alt="aeroplane_image"
        className="aeroplane_img"
      ></img>
      <div className="Electronics">
        <Content1 heading="Best of Electronics" />
        <img
          src="images/content1_images/aeroplane_banner.png"
          alt="aeroplane_image"
          id="image"
        ></img>
      </div>
      <div className="Beauty">
        <Beauty heading="Beauty,Food,Toys and more..."></Beauty>
      </div>

      <div className="Independence_day">
        <Specials></Specials>
        <img
          src="images/independence_day/specials.png"
          alt=""
          style={{ height: "700px", width: "75%", float: "right" }}
        />
      </div>

      

      <Footer></Footer> */}

      <Become_seller />
    </div>
  );
}
