import InternetCards from '../../../components/InternetCards';
// import { internet } from "../../../mock/internets";

const seperatePackets = (e) => {
  switch (e) {
    case value:
      break;

    default:
      break;
  }
};

const Packets = ({ data }) => {
  return (
    <div className='flex flex-col gap-4 my-5 mr-4'>
      {data.map((item, index) => (
        <InternetCards key={index} data={item} />
      ))}
    </div>
  );
};

export default Packets;
