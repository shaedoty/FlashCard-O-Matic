
import React from "react";
import Breadcrumb from "./Breadcrumb";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import View from "./View";
import Study from "./../Study/index";
import EditDeck from "./../EditDeck/index";
import Cards from "./../../Cards/index";


function Deck() {
  const {path} = useRouteMatch();

  return ( 
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Breadcrumb />
          <div className="row">
            <View />
          </div>
        </Route>
        <Route path={`${path}/study`}>
          <Study />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${path}/cards`}>
          <Cards />
        </Route>
      </Switch>
    </>
  )
}

export default Deck;