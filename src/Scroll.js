import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div class="scrollbar">
            {props.children}    
        </div>
    );
};
export default Scroll;