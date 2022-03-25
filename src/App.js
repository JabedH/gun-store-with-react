import "./App.css";
import Modal from "react-modal";
import NavBar from "./Components/NavBar/NavBar";

import { useState } from "react";
import Card from "./Components/Card/Card";

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

function App() {
  const [gun, setGun] = useState([]);
  const [modal, setModal] = useState([]);
  const addToCard = (guns) => {
    const newModal = [...modal, guns];
    setModal(newModal);
    console.log(guns.name);
  };
  useState(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGun(data));
  }, []);

  return (
    <div className="App">
      <NavBar modal={modal} gun={gun}></NavBar>
      <div className="card-details">
        {gun.map((gun) => (
          <Card key={gun.id} addToCard={addToCard} gun={gun}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
