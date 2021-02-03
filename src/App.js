import React, {useState, useEffect} from "react";
import Header from "./Header";
import News from "./News";
import mock from "./data/mock.json";

function App() {
    const [data, setData] = useState(null);
    const [input, setInput] = useState("");

    const searchFilter = () => {
        let searchOutputArr = data.hits.filter((hit) => hit.title.toLowerCase().includes(input))
        // if (!searchOutputArr) {
        //   console.log("nothing to find")}
        // else if (searchOutputArr.length > 1){
        //   console.log(searchOutputArr)
        return searchOutputArr.map((hit) => <News title={hit.title}/>)
    }

    const handleInput = (event) => {
        setInput(event.target.value.toLowerCase());
        //we want to filter our array of objects by using includes method then map our array//
    }

    useEffect(() => {
        setData(mock)
    }, [])

    // const [searchMatch, setSearchMatch]= useState("");
    // useEffect(()=>{

    // }
    // )

    return (
        <div>
            <div><Header onEvent={handleInput}/></div>
            <div>{data && searchFilter()}
            </div>
        </div>
    );
}

export default App;

/* <div>{mock.hits.map((hit) => <News title={hit.title}/>)}</div>
<div>{data && data.hits.filter((hit) => hit.title.toLowerCase().includes(input)).map((hit) => <News title={hit.title}/>)}
*/