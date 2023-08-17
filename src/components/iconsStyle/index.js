import styled from 'styled-components';
import { ReactComponent as MainIcon } from '../../assets/icons/Main.svg';
import { ReactComponent as ServicesIcon } from '../../assets/icons/services.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

const MainTabIcon = styled(MainIcon)`
  width: ${({ width }) => (width ? width : 'var(--icon-size)')};
  height: ${({ height }) => (height ? height : 'var(--icon-size)')};
  path {
    stroke: ${({ color }) => color || 'var( --icon-color)'};
  }
`;

const Services = styled(ServicesIcon)`
  width: ${({ width }) => (width ? width : 'var(--icon-size)')};
  height: ${({ height }) => (height ? height : 'var(--icon-size)')};
  path {
    fill: ${({ color }) => color || 'var(--icon-size)'};
    stroke: ${({ color }) => color || 'var(--icon-color)'};
  }
`;

const Settings = styled(SettingsIcon)`
  width: ${({ width }) => (width ? width : 'var(--icon-size)')};
  height: ${({ height }) => (height ? height : 'var(--icon-size)')};
  path {
    fill: ${({ color }) => color || 'var(--icon-size)'};
    stroke: ${({ color }) => color || 'var(--icon-color)'};
  }
`;

export { MainTabIcon, Services, Settings };
