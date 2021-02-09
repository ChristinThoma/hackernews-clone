import React from 'react';
import ShowMore from "./ShowMore"

const News = (props) => {
    return (
        <div key={props.id} className="news-div">
            <p>{props.title}</p>
            <button onClick={props.handleClick}>{props.showMore ? "Show less" : "Show more!"}</button>
            <br/>
            {props.showMore && <ShowMore link={props.link} author={props.author}/>}
        </div>
    )
}

export default News;