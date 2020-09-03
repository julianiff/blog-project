import React from "react";
import styled from "styled-components";
import { CurvedBg } from "ls-curved-bg";

const Background = styled.div`
  height: 100vh;
  position: relative;
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0, 25px);
  width: 100vw;
`;

export const BackgroundContainer: React.FC = ({ children }) => {
  return (
    <Background>
      {children}
      <Bottom>
        <CurvedBg height={500} variation={"double"}></CurvedBg>
      </Bottom>
    </Background>
  );
};
