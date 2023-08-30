import { internetsNon } from "../../../mock/internets";
import InternetCards from "../../../components/InternetCards";
const NonStop = () => {
  return (
    <div className="flex flex-col gap-4 my-5 mr-4">
      {internetsNon.map((item, index) => (
        <InternetCards key={index} {...item} />
      ))}
    </div>
  );
};

export default NonStop;
