import React from "react";
import Nav from "./components/Nav.js"
import Card from "./components/Card.js"
import data from "./data.js"

function App() {
  const card = data.map(item => {
    return <Card 
      key={item.id}
      {...item}
    />
  })

  return (
    <div className="App">
        <Nav />
        <section className="cards--list">
           {card}
        </section>
    </div>
  );
}

export default App;
