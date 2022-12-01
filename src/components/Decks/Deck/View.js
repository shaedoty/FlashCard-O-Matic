import React, {useState, useEffect} from "react";
import {Link, useHistory, useRouteMatch, useParams} from "react-router-dom";
import { deleteDeck, readDeck } from "../../../utils/api";
import DisplayCards from "./DisplayCards";

function View() {
  const history = useHistory();
  const {url} = useRouteMatch();
  const {deckId} = useParams();
  
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
    }, [deckId]);

  if (!deck) return null;
  return (
    <> 
      <div className="col-sm-12 p-0">
        <div className="card" style={{border: "none"}}>
          <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <Link to={`${url}/edit`} className="btn btn-secondary mr-1">Edit</Link>
                <Link to={`${url}/study`} className="btn btn-primary mr-1">Study</Link>
                <Link to={`${url}/cards/new`} className="btn btn-primary"><strong>+ Add Cards</strong></Link>
              </div>
              <div>
                <button className="btn btn-danger" onClick={() => {
                        if (window.confirm("Are you sure you want to delete this deck?")) {
                          deleteDeck(deck.id);
                          history.push("/");
                        } else {
                          history.push(`${url}`);
                        }
                      }
                    }>
                      Delete
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Cards</h1>
      </div>
      <DisplayCards deck={deck}/>
    </>
  )
  
}

export default View;