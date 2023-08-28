import InternetCards from "../../../components/InternetCards";
import { internet } from "../../../mock/internets";

const Packets = () => {
  console.log(internet);
  return (
    <div className="flex flex-col gap-4 my-5 mr-4">
      {internet.map((item, index) => (
        <InternetCards key={index} {...item}  />
      ))}
    </div>
  );
};

export default Packets;
