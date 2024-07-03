import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
      <div>
        <h1>Counter</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          Clicks: {count}
        </button>
      </div>
    );
}

export default Counter
