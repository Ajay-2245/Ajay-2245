import Card from "./content1_card";
import "../styles/content1.css";
function Content1(props) {
  return (
    <div className="content1">
      <h2>{props.heading}</h2>
      <div className="cards">
        <Card
          src="images/content1_images/projector.png"
          product="Projector"
          price="$99"
        ></Card>
        <Card
          src="images/content1_images/monitor.png"
          product="Monitor"
          price="$1200"
        ></Card>
        <Card
          src="images/content1_images/premium_powerbanks.png"
          product="Premium Powerbanks"
          price="$40"
        ></Card>
        <Card
          src="images/content1_images/printer.png"
          product="Printer"
          price="$120"
        ></Card>
        <Card
          src="images/content1_images/trimmers.png"
          product="Trimmers"
          price="$15"
        ></Card>
        {/* <Card
          src="images/content1_images/monitor.png"
          product="Monitor"
          price="$1200"
        ></Card>
        <Card
          src="images/content1_images/camera.png"
          product="Camera"
          price="$100"
        ></Card> */}
      </div>
    </div>
  );
}

export default Content1;
