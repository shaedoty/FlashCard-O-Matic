import React from "react";
import Breadcrumb from "./Breadcrumb";
import CardForm from "./../CardForm";

function AddCard({deck}) {
  return (
    <>
      <Breadcrumb deck={deck}/>
      <h1>{`${deck.name}: Add Card`}</h1>
      <CardForm deck={deck}/>
    </>
  )
}
 
export default AddCard;