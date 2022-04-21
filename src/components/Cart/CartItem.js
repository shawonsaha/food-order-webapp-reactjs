import classes from "./CartItem.module.css";

const CartItem = (props) => {
  // const price = `BDT ${props.price} /-`;

  const { name, amount, price } = props;

  // console.log(name, amount, price);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>BDT {price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
