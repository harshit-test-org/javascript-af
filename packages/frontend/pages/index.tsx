import React, { useState } from 'react';
import ForTest from '../components/ForTest';

export default () => {
  const [state, setCount] = useState(0);
  return (
    <div>
      <ForTest />
      <button onClick={() => setCount(state + 1)}>{state}</button>
    </div>
  );
};
