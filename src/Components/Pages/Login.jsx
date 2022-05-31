import React from "react";
import Card from "../Molecules/Card";
import Button from "../Atoms/Button";

export default function Login() {
  return (
    <div className="Login">
        <h3>Voules vous vous connecter ?</h3>
        <Card>
            <Button text="Oui"/>
            <Button text="Non"/>
        </Card>
    </div>
  );
}