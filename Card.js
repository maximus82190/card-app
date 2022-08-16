import React from 'react';

const Card = () => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt='contacts directory' src = {`https://robohash.org/test?200x200`}/>
            <div>
                <h2>Yankle Cohen</h2>
                <p>yankle.cohen@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;