import styled from 'styled-components';
import { Tabs } from 'antd';

export const Tab = styled(Tabs)`
  /* margin: ${({ margin }) => (margin ? margin : '0 40px 0 15px')}; */
  margin-left: 16px;
  /* padding: ${({ padding }) => (padding ? padding : '0 10px 0 0')}; */
  /* min-height: ${({ minHeight }) => (minHeight ? minHeight : '740px')}; */
  /* width: ${({ width }) => (width ? width : '100%')}; */

  .ant-tabs-content {
    height: 100%;
  }
  .ant-tabs-nav {
    margin: 0 !important;
  }

  .ant-tabs-nav-list {
    gap: 24px;
  }
  .ant-tabs-tab-btn {
    outline: none;
    transition: all 0.3s;
    padding: 0 5px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')}!important;
  }
  .ant-tabs-tab {
    padding: 16px 0 0 0;
    margin: 0 !important;
  }
`;
