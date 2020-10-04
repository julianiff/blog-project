import React from "react";
import styled from "styled-components";

const spacing = 0.35;
const borderColor = "white";
const backgroundColor = "#0f3057";
const color = "white";

const Container = styled.div`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  display: flex;
  height: calc(100vh - ${spacing}rem - ${spacing}rem - 2px);
  margin: ${spacing}rem;
  width: calc(100vw - ${spacing}rem - ${spacing}rem - 2px);
  flex-direction: column;
  border-radius: ${spacing}rem;
`

const Heading = styled.div`
  border-bottom: ${spacing}rem solid ${borderColor};
  height: ${25 * spacing}rem;
  width: 100%;
`

const TwoGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  height: 100%;
`

const LeftEntry = styled.div`
  border-right: ${spacing}rem solid ${borderColor};
  color: ${color};
  width: 100%;
`

const RightEntry = styled.div`
  color: ${color};
  width: 100%;
`

const TwoGridHorizontal = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 100%;
  width: calc(100% + 1px);
`

const TopHorizontal = styled.div`
  border-bottom: solid ${spacing}rem ${borderColor};

`

const Text = styled.div`
  color: ${color};
`

export const BlogDetail = () => {
    return (
        <Container>
            <Heading>
                <Text>
                </Text>
            </Heading>
            <TwoGrid>
                <LeftEntry>
                    <TwoGridHorizontal>
                        <TopHorizontal>
                            <Text></Text>
                        </TopHorizontal>
                        <Text></Text>
                    </TwoGridHorizontal>
                </LeftEntry>
                <RightEntry></RightEntry>
            </TwoGrid>
        </Container>
    );
};
