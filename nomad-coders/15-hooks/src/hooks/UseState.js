import React, { useState } from 'react';

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <div>Count : {item}</div>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default App;
