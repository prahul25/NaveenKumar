import React from "react";
import "./App.css";
import data from "./data.json";
function App() {
  const userData = data.data;
  console.log(userData);
  return (
    <div>
      <header className="textHeader">Select Doctor</header>
      <div className="cardContainer">
        {userData.map((items, index) => {
          return (
            <div className="cardWrapper" key={index}>
              <img
                className="imageWrapper"
                src={items.picture.large}
                alt={items.name.first}
              />
              <p className="textWrapper">
                {items.name.title}. {items.name.first} {items.name.last}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
