
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

function DisplayCard({deck}) {
  const history = useHistory();
  
  const [Card, setCard] = useState(0);
  const [Side, setSide] = useState(true);

  const allCards = deck.cards;

  function handleFlip() {
    setSide(!Side);
  }
 
  function handleNext() {
    setCard(prevCard => prevCard + 1);
    setSide(true); // sets side to front when switching to another card
    if (Card === allCards.length - 1) {
      return window.confirm("Restart Cards?") ? setCard(0) : history.push("/");
    }
  }

  function handlePrev() {
    setCard(prevCard => prevCard - 1);
    setSide(true);
  }
  
  if (allCards.length < 3) {
    return <NotEnoughCards allCards={allCards} />
  }
  return (
    <div className="row py-2 d-flex justify-content-center">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card {Card + 1} of {allCards.length}</h5>
            <p className="card-text">{Side ? allCards[Card].front : allCards[Card].back}</p>
            { Card >= 1 ? <button id="previous" className="btn btn-primary" onClick={handlePrev}>Previous</button> : null}
            <button className="btn btn-secondary mx-2" onClick={handleFlip}>Flip</button>
            {!Side ? <button className="btn btn-primary" onClick={handleNext}>Next</button> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCard;