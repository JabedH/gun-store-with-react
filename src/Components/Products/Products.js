import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";

import "./Products.css";

const Products = () => {
  const [gun, setGun] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGun(data));
  }, []);
  return (
    <div className="card-details">
      {/* {gun.map((gun) => (
        <Card key={gun.id} gun={gun}></Card>
      ))} */}
    </div>
  );
};

export default Products;
