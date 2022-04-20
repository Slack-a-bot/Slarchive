/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import Emojis from './emojis';

const EmojisContainer = () => {
  const [database, setDatabase] = useState([]);
  // Intial Render
  useEffect(() => {
    fetch('/api/?emojis="true"')
      .then((response) => response.json())
      .then((data) => {
        setDatabase(data);
        // console.log(data);
      });
  }, []);

  const emojisArr = [];

  const loadSavedEmojisClickHandler = () => {
    fetch('/api/?emojis="true"')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDatabase(data);
        // console.log(data);
      });
  }
  
  for(let i = 0; i < database.length; i++) {
    const excludeObj = {
      shipit: true,
      white_square: true,
      black_square: true
    }
    if (!excludeObj[database[i].emoji_name]) emojisArr.push(<Emojis key={`Emojis${database[i].emoji_name}`} emojiData={database[i]}/>)
  }

  return (
    <>
      <div className='emojisContainer'>
        {emojisArr}
      </div>
      <button onClick={loadSavedEmojisClickHandler}>Load Saved Emojis</button>
      <button>Download emojis</button>
    </>
  );
};

export default EmojisContainer;
