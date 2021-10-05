import React from "react";
import FilterList from "./FilterList";

function ItemList({ results,teams,competitons }) {


  if ( results.data!=null){
    
  }
  else{
    return false
  }

  return (
    <div>
      <FilterList results={results} teams={teams} competitons={competitons}/>
    </div>
  );
}

export default ItemList;