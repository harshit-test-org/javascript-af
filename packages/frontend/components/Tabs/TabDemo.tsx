import React from 'react';

import { Tabs, Tab, TabChangeHandler } from '.';

export default () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange: TabChangeHandler = (_e, val) => {
    setValue(val);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab>Speaker</Tab>
        <Tab>Conference</Tab>
      </Tabs>
      Current value: {value}
    </>
  );
};
