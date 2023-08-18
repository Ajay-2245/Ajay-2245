import Card from "./content1_card";
import "../styles/beauty.css";
function Beauty(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="beauty_cards">
        <Card
          src="images/beauty_food_images/geared_cycle.png"
          product="Geared Cycle"
          price="50% Off"
        ></Card>
        <Card
          src="images/beauty_food_images/electric_cycle.png"
          product="Electric Cycle"
          price="55% Off"
        ></Card>
        <Card
          src="images/beauty_food_images/soft_toys.png"
          product="Soft toys"
          price="65% Off"
        ></Card>
        <Card
          src="images/beauty_food_images/tyres.png"
          product="Tyres"
          price="60% Off"
        ></Card>
        <Card
          src="images/beauty_food_images/dry_fruits.png"
          product="Dry fruits"
          price="40% Off"
        ></Card>
        <Card
          src="images/beauty_food_images/tricycles.png"
          product="Tricycles & Rideons"
          price="80% Off"
        ></Card>
        {/* <Card
          src="images/beauty_food_images/tricycles.png"
          product="Tricycles & Rideons"
          price="80% Off"
        ></Card> */}
        {/* <Card
          src="images/beauty_food_images/tricycles.png"
          product="Tricycles & Rideons"
          price="80% Off"
        ></Card> */}
      </div>
    </div>
  );
}

export default Beauty;
