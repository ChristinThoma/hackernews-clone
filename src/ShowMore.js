import React from 'react';

const ShowMore = (props) => {
    
    return (
        <div className="show-more">
            <div>Author: {props.author}</div>
            <div><a href={props.link} target="_blank">Link to full article</a></div>
        </div>
    )
}

export default ShowMore;