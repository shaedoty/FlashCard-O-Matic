import React from "react";
import {Link, useParams} from "react-router-dom";

function NotEnoughCards({allCards}) {
  const {deckId} = useParams();
  
  return (
    <>
      <h1>Not Enough Cards</h1>
      <p>You need at least 3 cards to study. You have {allCards.length} cards in your deck.</p>
      <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary"><strong>+ Add Cards</strong></Link>
    </>
  )
}

export default NotEnoughCards; 