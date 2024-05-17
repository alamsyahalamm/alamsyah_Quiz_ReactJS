import React, { useState, useEffect } from 'react';

const StateLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
      <p>Current count: {count}</p>
    </div>
  );
};

export default StateLogger;
