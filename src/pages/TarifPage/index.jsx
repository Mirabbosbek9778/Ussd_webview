import TopBar from "../../components/TopBar";
import Tabs from "../../components/Tabs";
import Tariflar from "./Tariflar";
import { useCompany } from "../../context/Company";
import { mobiuzTarifs } from "../../mock/mobiUzTarifs";
import { tariffUzmobile } from "../../mock/tarifCategory";
import { tariffUcell } from "../../mock/tarifCategoryUcell";
import { beelineTariff } from "../../mock/beelineTarifs";

const tarifTabItems = (e) =>
  e.map((item, index) => ({
    key: index,
    children: <Tariflar data={item?.tarifs} />,
    label: `"${item?.category}" tariflari`,
  }));

const Tarif = () => {
  const [state] = useCompany();
  const UssdCodesAll = {
    uzmobile: tariffUzmobile,
    beeline: beelineTariff,
    ucell: tariffUcell,
    mobiuz: mobiuzTarifs,
  };
  return (
    <div className="bg-[var(--bg-color)] h-[100%] flex flex-col  ">
      <div className="h-[89px]"></div>
      <TopBar title={"Tarif rejalar"} />
      <Tabs items={tarifTabItems(UssdCodesAll[state?.company])} />
    </div>
  );
};

export default Tarif;
