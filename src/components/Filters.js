import React from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "../scss/App.scss"
import Competitons from "./categories/Competitons"
import Teams from "./categories/Teams"
import All from "./categories/All"

export default function Filters({ results,teams,competitons }) {
        
    function Vse() {
        return (
            <All results={results}/>
        );
    }
    function Tymy() {
        return (
            <Teams teams={teams}/>
        );
    }
    function Souteze() {
        return (
            <Competitons competitons={competitons}/>
        );
    }
    return (
        <Router>  
            <div className="btns-container">
              <NavLink exact={true} activeClassName="is-active" className="btn-all" to="/"> Vše </NavLink>   

              <NavLink  activeClassName="is-active" className="btn-teams" to="/tymy">Týmy </NavLink>
        
              <NavLink  activeClassName="is-active" className="btn-competitons" to="/souteze">Soutěže</NavLink>    
            </div> 

            <Switch>
              <Route exact path="/">
                <Vse />
              </Route>
              <Route path="/tymy">
                <Tymy />
              </Route>
              <Route path="/souteze">
                <Souteze />
              </Route>
            </Switch>
        </Router>
      );
    }