import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

import { db } from "../../firebase";

// import firebase from "firebase/compat/app";

// import { foodorderRef } from "../../firebase";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `BDT ${cartCtx.totalAmount}/-`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [data, setData] = useState("");

  // const ref = firebase.firestore().collection("orders");

  const postData = (event) => {
    event.preventDefault();
    let order = {
      items: cartCtx.items,
      priceTotal: cartCtx.totalAmount,
      name: name,
      phone: phone,
      location: address,
      time: new Date().toLocaleString(),
    };

    // foodorderRef.push(orders);
    db.collection("orders").add(order);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasItems && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <form>
            <input
              type="text"
              label="Name"
              id="name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="number"
              label="Phone"
              id="phone"
              placeholder="Mobile Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              label="Address"
              id="address"
              placeholder="Detailed Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div>
              <br></br>
            </div>
          </form>
        </div>
      )}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={postData}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
