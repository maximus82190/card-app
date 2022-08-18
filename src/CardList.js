import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    return (
        <div>
            
            {robots.map((user,id) => {
            return (
                <Card
                key = {i}
                id = {robots[id].id}
                name = {robots[id].name}
                email = {robots[id].email}
                />
                );
})
}
        </div>
    );
}

export default CardList;