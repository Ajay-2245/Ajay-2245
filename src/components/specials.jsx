import Card from "./content1_card";
import "../styles/specials.css";
import { Row, Col, Container } from "reactstrap";
function Specials() {
  return (
    <div className="specials_container">
      <h3>Independence Day Offers</h3>
      <div className="specials">
        <Card src="images/independence_day/watch.png"></Card>

        <Card src="images/independence_day/shoes.png"></Card>
      </div>
      <div className="specials">
        <Card src="images/independence_day/laptops.png"></Card>

        <Card src="images/independence_day/shirts.png"></Card>
      </div>
    </div>
  );
}

export default Specials;
