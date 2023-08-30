import styled from 'styled-components';
import { Tabs } from 'antd';

export const Tab = styled(Tabs)`
  margin-left: 16px;

  .ant-tabs-content {
    /* height: 100%; */
  }
  .ant-tabs-nav {
    margin: 0 !important;
    /* max-width: 700px;
    min-width: 375px;
    position: fixed;
    top: 89px;
    right: 0;
    left: 0;
    z-index: 10;
    padding-left: 16px; */
    /* background-color: transparent; */
  }
  .ant-tabs-nav-wrap::before {
    opacity: 0 !important;
  }

  .ant-tabs-nav-list {
    gap: 24px;
  }
  .ant-tabs-tab-btn {
    outline: none;
    transition: all 0.3s;
    padding: 0 5px;
    font-size: 16px !important;
  }
  .ant-tabs-tab {
    padding: 16px 0 0 0;
    margin: 0 !important;
  }

  .ant-tabs-ink-bar {
    background: var(--ussd-color);
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--ussd-color) !important ;
  }

  .ant-tabs-tab:hover {
    color: var(--ussd-color) !important;
  }
`;
