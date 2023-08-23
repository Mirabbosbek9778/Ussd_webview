import React from "react";
import { CopyIcon } from "../iconsStyle";
import { Wrapper, TarifCode, TarifWrite, Box } from "./style";

const Copy = () => {
  return (
    <Wrapper>
      <TarifWrite>Tarifga o'tish</TarifWrite>
      <Box>
        <TarifCode className="text-blue-700">*111*1*11*3*1#</TarifCode>
        <CopyIcon />
      </Box>
    </Wrapper>
  );
};

export default Copy;
