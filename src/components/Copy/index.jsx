import React, { useState } from "react";
import { CopyIcon } from "../iconsStyle";
import { Wrapper, TarifCode, TarifWrite, Box } from "./style";
const Copy = (props) => {
  const [state, setstate] = useState(true);
  return (
    <Wrapper>
      <TarifWrite>
        {state ? <p>Xizmatni faollashtirish</p> : <p>Xizmatni o’chirish</p>}
      </TarifWrite>
      <Box>
        <TarifCode>{props?.activate}</TarifCode>
        <button>
          <CopyIcon
            onClick={() =>
              window.navigator.clipboard.writeText(props?.activate)
            }
          />
        </button>
      </Box>
    </Wrapper>
  );
};

export default Copy;
// ghjk
