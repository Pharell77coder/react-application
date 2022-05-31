import React from 'react';
import Card from "../Molecules/Card";
import Button from "../Atoms/Button";

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