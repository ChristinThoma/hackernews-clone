import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";

// import mock from "./data/mock.json";

function App() {
    const [data, setData] = useState(null);
    // const [input, setInput] = useState("");
    const [userSearch, setUserSearch] = useState("javaScript");
    const [showMoreButton, setShowMoreButton] = useState(false);

    const clickShowMoreButton = () => {
        setShowMoreButton(true)
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
        }, networkError => {
            console.log(networkError.message);
        })
            .then((jsonResponse) => {
                setData(jsonResponse);
            })
    }, [userSearch])

    useEffect(() => {
        console.log(data)
    }, [data])

    // const [searchMatch, setSearchMatch]= useState("");
    // useEffect(()=>{

    // }
    // )

    return (
        <div>
            <div><Header onEvent={handleInput}/></div>
            <div className="news-body">{data && data.hits.map((hit) => <News key={hit.objectID} title={hit.title}
                                                                             handleClick={clickShowMoreButton}
                                                                             showMore={showMoreButton}/>)}</div>
            <Footer/>
        </div>
    );
}

export default App;

/* <div>{mock.hits.map((hit) => <News title={hit.title}/>)}</div>
<div>{data && data.hits.filter((hit) => hit.title.toLowerCase().includes(input)).map((hit) => <News title={hit.title}/>)}
*/