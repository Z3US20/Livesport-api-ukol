import React from "react";
import Item from "../Item";

function All({ results}) {
  
  let data = [];

  if (results.data!=null) {
    data = results.data;
  }
  else {
    return false
  }

  return (
    <div className="results">
       {data.map((item,key) => (
          <Item key={key} item={item} />
        ))}
    </div>
  );
}

export default All;