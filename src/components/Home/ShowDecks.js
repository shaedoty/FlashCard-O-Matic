import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import { deleteDeck, listDecks } from "./../../utils/api/index";

function ShowDecks() {

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    fetchDecks();
  }, []);

  const history = useHistory();

   
  // creates a card listing for each deck
  const deckListings = decks.map((deck) => {
    const cards = deck.cards;
    
    function handleDelete(event) {
      if (window.confirm("Are you sure you want to delete this deck?")) {
        deleteDeck(deck.id);
        setDecks(prevDeck => {
          const newDeck = prevDeck.filter(item => item.id !== deck.id)
          return newDeck;
        })  
      } else {
        event.target.parentElement.parentElement.parentElement.style.backgroundColor = "#fff";
        history.push("/");
      }
    }
    
    return (
      <div className="col-sm-6" key={deck.id}>
        <div className="card">
          <div className="card-body">
            <div className='d-flex justify-content-between'>
              <h5 className="card-title">{deck.name}</h5>
              <p>{`${cards.length} cards`}</p>
            </div>
            <p className="card-text">{deck.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-1">View</Link>
                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
              </div>
              <div>
                <button className="btn btn-danger" onMouseDown={(event) => event.target.parentElement.parentElement.parentElement.style.backgroundColor = "#E8eff1"} onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  })
  
  return (
    <div className="row">
      {deckListings}
    </div>
  )
}

export default ShowDecks;