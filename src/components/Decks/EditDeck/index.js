import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { readDeck } from "../../../utils/api";
import Breadcrumb from "./Breadcrumb";
import DeckForm from "./../DeckForm";

function EditDeck() {
  
  const {deckId} = useParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    } 
    getDeck();
  }, [deckId])
  
  if (!deck) return null;
  return (
    <>
    <Breadcrumb deck={deck}/>
    <h1>Edit Deck</h1>
    <DeckForm deck={deck} />
    </>
  )
}

export default EditDeck;