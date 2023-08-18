import "../styles/content1.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="random" />
      <p>{props.product}</p>
      <p>From Rs.{props.price}</p>
    </div>
  );
}

export default Card;
