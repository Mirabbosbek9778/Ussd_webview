import React from "react";
import { CopyIcon } from "../iconsStyle";
import { Wrapper, TarifCode, TarifWrite, Box } from "./style";

const Copy = ({ ussd_code }) => {
  return (
    <Wrapper>
      <TarifWrite>Tarifga o'tish</TarifWrite>
      <Box>
        <TarifCode>{ussd_code}</TarifCode>
        <button>
          <CopyIcon
            onClick={() => window.navigator.clipboard.writeText(ussd_code)}
          />
        </button>
      </Box>
    </Wrapper>
  );
};

export default Copy;
