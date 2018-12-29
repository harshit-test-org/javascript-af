import React, { useState } from 'react';

export default () => {
  const [state, setCount] = useState(0);
  return <button onClick={() => setCount(state + 1)}>{state}</button>;
};
