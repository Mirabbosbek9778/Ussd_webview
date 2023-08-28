import React from 'react';
import { CopyIcon } from '../iconsStyle';
import { Wrapper, TarifCode, TarifWrite, Box } from './style';
const Copy = () => {
  return (
    <Wrapper>
      <TarifWrite>Tarifga o'tish</TarifWrite>
      <Box>
        <TarifCode>*100#</TarifCode>
        <button>
          <CopyIcon
            onClick={() => window.navigator.clipboard.writeText('*100#')}
          />
        </button>
      </Box>
    </Wrapper>
  );
};

export default Copy;
// ghjk
