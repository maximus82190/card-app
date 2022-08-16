import React from 'react';
import CardList from './CardList';
import { robots } from './robots.js';



const App = () => {
  return (
    <CardList robots={robots}/>
  );
}


export default App;