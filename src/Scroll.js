import React from 'react';
import Style from './Scroll.css';

const Scroll = (props) => {
    return (
        <div>
            <Style/>
            {props.children}
        </div>
    );
};
export default Scroll;