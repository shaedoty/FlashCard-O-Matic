import React from "react";
import {Link, useParams} from "react-router-dom";

function Breadcrumb({deck}) {
  
  const {cardId} = useParams();

  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
      <li className="breadcrumb-item active" aria-current="page">{`Edit Card ${cardId}`}</li>
    </ol>
  </nav> 
  )
}

export default Breadcrumb;