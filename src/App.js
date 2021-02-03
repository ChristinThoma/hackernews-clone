import React from "react";
import Header from "./Header";
import News from "./News";
import mock from "./data/mock.json";

function App() {
  
    console.log(mock);
  
    
  return (
    <div>
      <div><Header /></div>
      <div>{mock.hits.map((hit) => <News title={hit.title}/>)}</div>
      <div></div>
    </div>
    
    
  );
}

export default App;
