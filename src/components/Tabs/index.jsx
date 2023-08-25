import React from 'react';
import { Tab } from './style';

const CustomTabs = ({
  items,
  margin,
  padding,
  minHeight,
  width,
  onChange,
  defaultActiveKey,
  activeKey,
  fontSize,
}) => {
  return (
    <Tab
      fontSize={fontSize}
      activeKey={activeKey}
      defaultActiveKey={defaultActiveKey}
      items={items}
      margin={margin}
      padding={padding}
      minHeight={minHeight}
      width={width}
      onChange={onChange}
    />
  );
};

export default React.memo(CustomTabs);
