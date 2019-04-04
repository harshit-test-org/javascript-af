import React from 'react';

import { Tabs, Tab, TabChangeHandler } from '.';

export default () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange: TabChangeHandler = (_e, val) => {
    setValue(val);
  };

  return (
    <>
      <Tabs onChange={handleChange}>
        <Tab>1</Tab>
        <Tab>2</Tab>
      </Tabs>
      Current value: {value}
    </>
  );
};
