import { CopyIcon } from '../iconsStyle';
import { Wrapper, TarifCode, TarifWrite, Box } from './style';
const Copy = ({ isFull, activate }) => {
  return (
    <Wrapper>
      <TarifWrite>
        {isFull ? 'Xizmatni faollashtirish' : " Xizmatni o'chirish"}
      </TarifWrite>
      <Box>
        <TarifCode>{activate}</TarifCode>
        <CopyIcon
          onClick={() => window.navigator.clipboard.writeText(activate)}
        />
      </Box>
    </Wrapper>
  );
};

export default Copy;
