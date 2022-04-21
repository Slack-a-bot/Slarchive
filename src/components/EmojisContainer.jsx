/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import Emojis from './emojis';
import { saveAs } from 'file-saver';

const excludeObj = {
  shipit: true,
  white_square: true,
  black_square: true
}

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

  const downloadClickHandler = () => {
    // saveAs()
    // console.log(database)
    for (let i = 0; i < database.length; i++) {
      if (!excludeObj[database[i].emoji_name]) {
        saveAs(database[i].emoji_link, database[i].emoji_name);
      }
      // console.log(database[i].emoji_link)
    }
  }

  const handleClear = () => {
    setDatabase('')
  }
  
  for(let i = 0; i < database.length; i++) {
    if (!excludeObj[database[i].emoji_name]) emojisArr.push(<Emojis key={`Emojis${database[i].emoji_name}`} emojiData={database[i]} />)
  }

  return (
    <>
      <div className='emojisContainer' >
        {emojisArr.length ? emojisArr : 'No saved emojis detected. Save some using /downloademojis!'}
      </div>
      <button onClick={loadSavedEmojisClickHandler}>Load Saved Emojis</button>
      <button onClick={downloadClickHandler}>Download Emojis</button>
      <button onClick={handleClear}>Clear Saved Emojis</button>
    </>
  );
};

export default EmojisContainer;
