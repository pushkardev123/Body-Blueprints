import React, { useState, useEffect } from 'react';

const Test = () => {
  const [clickedId, setClickedId] = useState(null);

  useEffect(() => {
    console.log('Component rendered or updated');
  });

  const handleClick = (event) => {
    const elementId = event.target.id;
    console.log('Clicked element ID:', elementId);  // Print the ID to console
    setClickedId(elementId);
  };

  return (
    <div>
      <button id="button1" onClick={handleClick}>Button 1</button>
      <button id="button2" onClick={handleClick}>Button 2</button>
      <button id="button3" onClick={handleClick}>Button 3</button>
      {clickedId && <p>Clicked element ID: {clickedId}</p>}
    </div>
  );
};

export default Test;
