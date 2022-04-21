/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';

const Emojis = (props) => {
  const {id, emoji_name, emoji_link} = props.emojiData;
  const [color, setColor] = useState('rgb(191, 206, 219)');
  const handleClick = () => {
    if (color === 'blueviolet') setColor('rgb(191, 206, 219)');
    else setColor('blueviolet');
  }
  return (
    <>
      <div className="emojiBox" style={{backgroundColor: color}} onClick={handleClick}>
        <img src={emoji_link} alt="error" />
        {emoji_name}
      </div>
    </>
  );
};

export default Emojis;
