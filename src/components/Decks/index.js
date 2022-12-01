import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateDeck from "./CreateDeck/index";
import Deck from "./Deck/index";

function Decks() {
  return (
    <Switch>
      <Route path="/decks/new">
        <CreateDeck />
      </Route>
      <Route path="/decks/:deckId">
        <Deck />
      </Route>
    </Switch>
  )
} 

export default Decks;