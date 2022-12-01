import React, {useState, useEffect} from "react";
import { deleteCard, readDeck } from "./../../../utils/api";
import {Link, useRouteMatch, useHistory} from "react-router-dom";

function DisplayCards({deck}) {
  const {url} = useRouteMatch();
  const history = useHistory();
  
  const [cards, setCards] = useState(null);

  useEffect(() => {
    async function getCards() {
      const response = await readDeck(deck.id);
      setCards(response.cards);
    } 
    getCards();
  }, [deck.id])

  
  if (!cards) return null;
  return (
    cards.map(card => {
      
      function handleDelete(event) {
        if (window.confirm("Are you sure you want to delete this card?")) {
          deleteCard(card.id);
          history.push(`${url}`);
          setCards(prevCards => {
            const newCards = prevCards.filter(item => item.id !== card.id)
            return newCards;
          })
        } else {
          event.target.parentElement.parentElement.style.backgroundColor = "#fff";
          history.push(`${url}`)
        }
      }

      return (
        <div className="col-sm-6" key={card.id}>
          <div className="card">
            <div className="card-body">
              <p className="card-text"><strong>Front: </strong>{card.front}</p>
              <p className="card-text"><strong>Back: </strong>{card.back}</p>
              <div className= "d-flex justify-content-end">
                <Link to={`${url}/cards/${card.id}/edit`}className="btn btn-secondary mr-1">Edit</Link>
                <button className="btn btn-danger" onMouseDown={(event) => event.target.parentElement.parentElement.style.backgroundColor = "#E8eff1"} onClick={handleDelete}>Delete</button>
              </div>  
            </div>        
          </div>
        </div>
      )
    })
  )
}

export default DisplayCards;