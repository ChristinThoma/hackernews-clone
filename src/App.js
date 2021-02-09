import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import {CircularProgress} from "@material-ui/core"
import ShowMore from "./ShowMore";

// import mock from "./data/mock.json";

function App() {
    const [data, setData] = useState(null);
    const [userSearch, setUserSearch] = useState("javaScript");
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [elementIds, setElementIds] = useState({})

    const clickShowMoreButton = (id) => {
      if (elementIds[id]===undefined){
        const hits= data.hits.slice();
        const idObj ={};
        for (const el of hits){
          if (el.objectID=== id){
            idObj[el.objectID]= true
          } else idObj[el.objectID]= false;
        }
        setElementIds(idObj);
      } else {
        const newElementIds= {...elementIds};
        newElementIds[id]= !newElementIds[id];
        setElementIds(newElementIds)
      }
    }

  //*****OLD VERSION USING MOCK DATA START******
  //const searchFilter = () => {
  //   let searchOutputArr = data.hits.filter((hit) => hit.title.toLowerCase().includes(userSearch))
  //   if (searchOutputArr.length < 1) {
  //     return (
  //           <div className="no-match-div">
  //               <p>THERE IS NO MATCH!</p>
  //           </div>
  //           )
  //   }
  //   else {
  //     console.log(searchOutputArr)
  //     return searchOutputArr.map((hit) => <News title={hit.title} />)
  //   }
  // }
  ////*****OLD VERSION USING MOCK DATA END******

  const handleInput = (event) => {
    setUserSearch(event.target.value);
    //we want to filter our array of objects by using includes method then map our array//
  }

  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${userSearch}&tags=story`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => { console.log(networkError.message); })
      .then((jsonResponse) => {
        setData(jsonResponse);
      })
  }, [userSearch])


  return (
    <div>
      <div><Header onEvent={handleInput} /></div>
      <div className="news-body">{!data ? <CircularProgress /> : data.hits.map((hit) => <News key={hit.objectID} title={hit.title} handleClick={()=>clickShowMoreButton(hit.objectID)} showMore={elementIds[hit.objectID]} author={hit.author} link={hit.url} />)}</div>
      <Footer />
    </div>
  )};
  export default App;

