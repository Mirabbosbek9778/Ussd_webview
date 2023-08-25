import React from 'react';
import { CopyIcon } from '../iconsStyle';
import { Wrapper, TarifCode, TarifWrite, Box } from './style';

const Copy = () => {
  return (
    <Wrapper>
      <TarifWrite>Tarifga o'tish</TarifWrite>
      <Box>
        <TarifCode>*100#</TarifCode>
        <CopyIcon
          onClick={() => window.navigator.clipboard.writeText('*100#')}
        />
      </Box>
    </Wrapper>
  );
};

export default Copy;
// ghjk
