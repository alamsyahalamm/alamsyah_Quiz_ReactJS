import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>You have clicked the button {count} times.</p>
    </div>
  );
};

export default ClickCounter;
