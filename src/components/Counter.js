import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Removed unused increment/decrement functions since we're using inline handlers
  // (Alternatively, you could use these functions instead of inline handlers)

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;