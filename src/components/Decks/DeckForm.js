import React, {useState, useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import { createDeck, updateDeck, listDecks } from "../../utils/api/index";

function DeckForm({deck}) {
  
  const history = useHistory();
  const {pathname} = useLocation();

  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState({"name": ""});
  const [description, setDescription] = useState({"description": ""});

  useEffect(() => {
    function addOrEdit() {
      if (pathname.includes("edit")) {
        setName({"name": deck.name});
        setDescription({"description": deck.description});
      } else {
        setIsEdit(false);
      } 
    }
    addOrEdit();
  }, [deck, pathname])

  function handleName(event) {
    setName({...name, "name": event.target.value});
  }

  function handleDescription(event) {
    setDescription({...description, "description": event.target.value});
  }
 
  async function handleCreate() {
    await createDeck({...name, ...description});
    const response = await listDecks();
    const newDeckId = Math.max(...response.map(deck => deck.id));
    history.push(`/decks/${newDeckId}`);
  }

  function handleUpdate() {
    updateDeck({"id": deck.id, ...name, ...description});
    history.push(`/decks/${deck.id}`);
  }
  
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name.name || ''} placeholder={isEdit ? null : "Deck Name"} onChange={handleName} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea className="form-control" id="description" rows="3" value={description.description || ''} placeholder={isEdit ? null : "Brief Description of Deck"} onChange={handleDescription}> </textarea>
        </div>
        
        <button type="button" className="btn btn-secondary mr-1" onClick={() => history.push(isEdit ? `/decks/${deck.id}` : "/")}>Cancel</button>
       
        <button 
          type="button"
          className="btn btn-primary"
          onClick={isEdit ? handleUpdate : handleCreate}
          >Submit
        </button>

      </form>
    </>
  )
}

export default DeckForm;