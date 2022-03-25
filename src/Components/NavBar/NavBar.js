import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-modal";
import "./NavBar.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const NavBar = (props) => {
  console.log(props.modal);
  for (let myGuns of props.modal) {
    console.log(myGuns);
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="navbar">
      {/* modal */}
      <div>
        {/* <button>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="close-btn">
            <button onClick={closeModal}>X</button>
          </div>
          {props.modal.map((gun) => (
            <div className="gun-details">
              <img src={gun.img} alt="" />
              <h3>{gun.name}</h3>
              <p>{gun.bullet}</p>
            </div>
          ))}
        </Modal>
      </div>
      {/* end modal */}
      <h3>Gun Store</h3>
      <div>
        <a href="">Home</a>
        <a href="">Upcoming Guns </a>
        <a href="#" onClick={openModal}>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          <sup>{props.modal.length}</sup>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
