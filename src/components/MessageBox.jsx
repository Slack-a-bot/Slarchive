/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';

const MessageBox = () => {
  const [database, setDatabase] = useState([]);
  // Intial Render
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setDatabase(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>Hello React</h1>
      <h2>{JSON.stringify(database)}</h2>
    </>
  );
};

export default MessageBox;
