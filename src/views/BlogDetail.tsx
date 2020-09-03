import React from "react";
import { BackgroundContainer } from "../components/BackgroundContainer";
import styled from "styled-components";

const Title = styled.h3`
  margin: 0;
`;

export const BlogDetail = () => {
  return (
    <BackgroundContainer>
      <Title>Component Framework</Title>
      <p>
        To build extendable Components we use the library lit-element and
        lit-html. For the management of the state of the blog it will use either
        react / preact and/or redux. There are many amazing frontend frameworks
        and all of them are very capable to build a solid frontend with them.
      </p>
    </BackgroundContainer>
  );
};
