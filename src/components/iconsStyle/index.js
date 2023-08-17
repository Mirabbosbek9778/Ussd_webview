import styled from "styled-components";
import { ReactComponent as MainIcon } from "../../assets/icons/Main.svg";
import { ReactComponent as ServicesIcon } from "../../assets/icons/services.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as CategoryCardIcon } from "../../assets/icons/arrowR.svg";
import { ReactComponent as ussdMenuIcon } from "../../assets/icons/ussd.svg";
import { ReactComponent as tarifMenuIcon } from "../../assets/icons/tarif.svg";
import { ReactComponent as internetMenuIcon } from "../../assets/icons/internet.svg";
import { ReactComponent as serviceMenuIcon } from "../../assets/icons/service.svg";
import { ReactComponent as restMenuIcon } from "../../assets/icons/rest.svg";
import { ReactComponent as operatorMenuIcon } from "../../assets/icons/operatos.svg";

const MainTabIcon = styled(MainIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    stroke: ${({ color }) => color || "var( --icon-color)"};
  }
`;

const Services = styled(ServicesIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const Settings = styled(SettingsIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const CategoryCardArrow = styled(CategoryCardIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const UssdMenuIcon = styled(ussdMenuIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const TarifMenuIcon = styled(tarifMenuIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const TnternetMenuIcon = styled(internetMenuIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const ServiceMenuIcon = styled(serviceMenuIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const RestMenuIcon = styled(restMenuIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

const OperatorMenuIcon = styled(operatorMenuIcon)`
  width: ${({ width }) => (width ? width : "var(--icon-size)")};
  height: ${({ height }) => (height ? height : "var(--icon-size)")};
  path {
    fill: ${({ color }) => color || "var(--icon-size)"};
    stroke: ${({ color }) => color || "var(--icon-color)"};
  }
`;

export {
  MainTabIcon,
  Services,
  Settings,
  CategoryCardArrow,
  UssdMenuIcon,
  TarifMenuIcon,
  TnternetMenuIcon,
  ServiceMenuIcon,
  RestMenuIcon,
  OperatorMenuIcon,
};
