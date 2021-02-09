import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import {CircularProgress} from "@material-ui/core"

function App() {
    const [data, setData] = useState(null);
    const [userSearch, setUserSearch] = useState("javaScript");
    const [elementIds, setElementIds] = useState({})

    const clickShowMoreButton = (id) => {
        if (elementIds[id] === undefined) {
            const hits = data.hits.slice();
            const idObj = {};
            for (const el of hits) {
                if (el.objectID === id) {
                    idObj[el.objectID] = true
                } else idObj[el.objectID] = false;
            }
            setElementIds(idObj);
        } else {
            const newElementIds = {...elementIds};
            newElementIds[id] = !newElementIds[id];
            setElementIds(newElementIds)
        }
    }

    const handleInput = (event) => {
        setUserSearch(event.target.value);
    }

    useEffect(() => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${userSearch}&tags=story`).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            alert("Connection failed, please try again");
        })
            .then((jsonResponse) => {
                setData(jsonResponse);
            })
    }, [userSearch])

    return (
        <div>
            <div><Header onEvent={handleInput}/></div>
            <div className="news-body">
                {!data ? <CircularProgress/> : data.hits.map((hit) => <News key={hit.objectID}
                                                                            title={hit.title}
                                                                            handleClick={() => clickShowMoreButton(hit.objectID)}
                                                                            showMore={elementIds[hit.objectID]}
                                                                            author={hit.author}
                                                                            link={hit.url}/>)}
            </div>
            <Footer/>
        </div>
    )
};
export default App;

