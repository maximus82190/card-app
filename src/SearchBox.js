import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input
        className='pa3 ba b--pink bg-lightest-blue'
        type='search'
        placeHolder='search contacts'
        onChange={searchChange}
        />
        </div>
    );
};

export default SearchBox;