import React from "react";
import Breadcrumb from "./Breadcrumb";
import CardForm from "./../CardForm";


function EditCard({deck}) {
    
  return (
    <>
      <Breadcrumb deck={deck} />
      <h1>Edit Card</h1>
      <CardForm deck={deck} />
    </>
  )
} 

export default EditCard;