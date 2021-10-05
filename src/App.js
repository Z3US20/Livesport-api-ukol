import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import livesportApi from "./api/livesport-api";
import ItemList from "./components/ItemList";
import "./scss/App.scss";

function App() {

  const [state, setState] = useState({ results: [] });
  const [team, setTeams] = useState({ teams: [] });
  const [competiton, setCompetitons] = useState({ competitons: [] });

  const onSearch = async (text) => {
    if (text.length > 2) {
      // Vše -----------------------------------------------------------------------------------------
      const results = await livesportApi.get("/", {
        params: {
          q: text,
          "lang-id": 2,
          "type-ids": "1,2,3,4",
          "project-id": 1,
          "project-type-id": 1
        },
      });
      setState((prevstate) => {
        return { ...prevstate, results: results };
      });
      // Týmy -----------------------------------------------------------------------------------------
      const teams = results.data.filter(
        (i) => i.type.name === "Team"
      );

      setTeams((prevstate) => {
        return { ...prevstate, teams: teams };
      });
      // Soutěže --------------------------------------------------------------------------------------
      const competitons = results.data.filter(
        (i) => i.type.name === "TournamentTemplate"
      );

      setCompetitons((prevstate) => {
        return { ...prevstate, competitons: competitons };
      });
    }
  };

  return (
    <div>
      <div className="App">
        <div className="start-text">
          <h3>Livesport API vyhledávání</h3>
        </div>
        <div className="container">
          <div className="searchbar">
            <SearchBar onSearch={onSearch} />
          </div>
          <ItemList
            results={state.results}
            teams={team.teams}
            competitons={competiton.competitons}
          />
        </div>
      </div>
    </div>

  );
}
export default App;

