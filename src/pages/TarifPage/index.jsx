import TopBar from "../../components/TopBar";
import Tabs from "../../components/Tabs";
import Tariflar from "./Tariflar";
import UnitsTarifs from "./UnitsTariflar";
import MilliyTarifs from "./MilliyTarifs";

const Tarif = () => {
  const tabItems = [
    {
      key: "1",
      children: <Tariflar />,
      label: "“Barakali” tariflari",
    },
    {
      key: "2",
      children: <UnitsTarifs />,
      label: "“Units” tariflari",
    },
    {
      key: "3",
      children: <MilliyTarifs />,
      label: "“Milliy” tariflari",
    },
  ];
  return (
    <div className="bg-[var(--bg-color)] h-[100%] flex flex-col  ">
      <div className="h-[89px]"></div>
      <TopBar title={"Tarif rejalar"} />
      <Tabs items={tabItems} />
    </div>
  );
};

export default Tarif;
