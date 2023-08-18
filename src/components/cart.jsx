import "../styles/cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="bg_img"></div>
      <p className="bold">Your cart is empty!</p>
      <p>add items to it now</p>
      <button>Shop now</button>
    </div>
  );
}

export default Cart;
