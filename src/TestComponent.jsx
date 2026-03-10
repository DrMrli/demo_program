import { useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default TestComponent;
