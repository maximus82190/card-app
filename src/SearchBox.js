import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input
        className='pa3 ba b--pink bg-lightest-blue'
        type='search'
        placeholder='Search Contacts'
        onChange={searchChange}
        />
        </div>
    );
};

export default SearchBox;