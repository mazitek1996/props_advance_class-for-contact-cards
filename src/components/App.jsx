import React from "react";
import contacts from "../contacts";
import Card from "./card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        alt={contacts[0].alt}
        tell={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        alt={contacts[1].alt}
        tell={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        alt={contacts[2].alt}
        tell={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
