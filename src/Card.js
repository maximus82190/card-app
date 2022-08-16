import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt='robot directory' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;