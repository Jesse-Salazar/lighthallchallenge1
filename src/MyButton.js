import React, { useState, useEffect } from 'react';
import "./MyButton.css";

const MyButton = () => {
  const [count, setCount] = useState(parseInt(localStorage.getItem('count')) || 0);
  
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);
  
  const handleClick = () => {
    // Increment counter
    setCount(count + 1);
  };

  return (
    <div className='MyButton'>
      <button onClick={handleClick}>Click Me</button>
      <span className='ClickBtn'>Counter: {count}</span>
    </div>
  );
};

export default MyButton;





