import Container, { Box, FooterText, Icons, Titletext } from "./style";

const TarifCard = ({
  package_name,
  internet,
  imginternet2,
  imginternet3,
  price,
  minutes,
  sms,
}) => {
  return (
    <Container>
      <div>
        <Titletext>{package_name}</Titletext>
      </div>
      <div className="flex gap-[175px] pl-2">
        <div className="flex pl-[15px] justify-center items-center gap-[10px]">
          <div>
            <img src={imginternet2} alt="" />
          </div>
          <p className="text-[#5A5A5A]">Internet</p>
        </div>
        <p className="text-{16px} font-normal text-#000000">{internet}</p>
      </div>
      <div className="flex gap-[140px] pl-2">
        <div className="flex pl-[15px] justify-center items-center gap-[10px]">
          <img src={imginternet2} alt="" />
          <p className="text-[#5A5A5A]">Daqiqalar</p>
        </div>
        <p className="text-{16px} font-normal text-[#000000]">{minutes}</p>
      </div>
      <div className="flex gap-[220px] pl-2">
        <div className="flex pl-[15px] justify-center items-center gap-[10px]">
          <img src={imginternet3} alt="" />
          <p className="text-[#5A5A5A]">SMS</p>
        </div>
        <p className="text-{16px} font-normal text-[#000000]">{sms}</p>
      </div>
      <Titletext.Title className="flex gap-[110px] pl-2 text-[#333333] w-[313px] h-0 border ">
        <p className="text-[#858585]">Abonent to’lovi</p>
        <FooterText>{price} so’m/oy</FooterText>
      </Titletext.Title>
    </Container>
  );
};

export default TarifCard;
