import React from "react";
import DeckForm from "./../DeckForm";
import Breadcrumb from "./Breadcrumb";

function CreateDeck() {

  return (
    <>
      <Breadcrumb />
      <h1>Create Deck</h1>
      <DeckForm />
    </>
  ) 
}

export default CreateDeck;