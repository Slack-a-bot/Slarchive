/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';

const Emojis = (props) => {
  const{id, emoji_name, emoji_link} = props.emojiData;

  return (
    <>
      <div className="emojiBox">
        <img src={emoji_link} alt="error" />
        {emoji_name}
      </div>
    </>
  );
};

export default Emojis;
