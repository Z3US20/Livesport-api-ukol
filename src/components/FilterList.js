import React from "react";
import Filters from "./Filters";

function FilterList({results, teams, competitons }) {

  return (
    <div>
      <div className="filter-list">
        <Filters results={results} teams={teams} competitons={competitons}/>
      </div>
      <div className="end-text">
        <small>Livesport API úkol By: Michal Bábela</small>
      </div> 
    </div> 
  );
}

export default FilterList;