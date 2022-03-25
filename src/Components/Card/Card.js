import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Card.css";
// import { BsFillCartFill } from "react-icons/bs";

const Card = (props) => {
  const { img, name, bullet, capacity, action, price, id } = props.gun;

  return (
    <div className="cart-details">
      <div className="card">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
        <div className="gun-info">
          <h1>{name} </h1>
          <p>Bullet type: {bullet} </p>
          <p>Capacity: {capacity} </p>
          <p>Action : {action} </p>
          <h1>$ {price} </h1>
        </div>
        <div className="add-to-cart">
          <button onClick={() => props.addToCard(props.gun)}>
            {" "}
            <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
