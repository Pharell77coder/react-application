import React from 'react';
import Button from "./Button";
import Card from "./Card";

export default function Welcome() {
  return (
    <div className="Welcome">
      <h3>Bienvenue !</h3>
        <Card>
            <Button text="Bienvenue"/>
        </Card>
    </div>
  );
}