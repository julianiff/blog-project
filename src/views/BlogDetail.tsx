import React from "react";
import styled from "styled-components";

const spacing = 0.35;
const borderColor = "white";
const backgroundColor = "#0f3057";
const color = "white";

const Container = styled.div`
  border: ${spacing}rem solid ${borderColor};
  
  display: grid;
  grid-template-rows: 1fr 10fr;
  grid-template-columns: ${spacing}rem 1fr ${spacing}rem; 
  grid-template-areas: 
    "header header header"
    "main main main"
    "main main main";
  gap: ${spacing}rem ${spacing}rem;
  max-height: calc(100vh - ${2 * spacing}rem);
`

const Heading = styled.div`
  grid-area: header;
  background-color: ${backgroundColor};
`

const TwoGrid = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "left right";
  gap: ${spacing}rem ${spacing}rem;
`

const LeftEntry = styled.div`
  grid-area: left;
  color: ${color};
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-areas: 
    "top"
    "bottom";
  gap: ${spacing}rem ${spacing}rem;
`

const RightEntry = styled.div`
  grid-area: right;
  color: ${color};
  background-color: ${backgroundColor};
  display: grid;
  align-items: center;
`

const TopHorizontal = styled.div`
  grid-area: top;
  background-color: ${backgroundColor};
  display: grid;
  align-items: center;
`
const BottomHorizontal = styled.div`
  grid-area: bottom;
  background-color: ${backgroundColor};
  display: grid;
  align-items: center;
`

const Text = styled.div`
  color: ${color};
`

const TextCenterContainer = styled.div`
  text-align: center;
`

const Title = styled.h1`
  color: ${color};
  font-size: 2rem;
  line-height: 1.5;
`

export const BlogDetail = () => {
    return (
        <Container>
            <Heading>
                <TextCenterContainer>
                    <Title>
                        Just a grid, not much more
                    </Title>
                </TextCenterContainer>
            </Heading>
            <TwoGrid>
                <LeftEntry>
                    <TopHorizontal>
                        <TextCenterContainer>
                            <Text>{textFragment}</Text>
                        </TextCenterContainer>
                    </TopHorizontal>
                    <BottomHorizontal>
                        <TextCenterContainer>
                            <Text>{textFragment}</Text>
                        </TextCenterContainer>
                    </BottomHorizontal>
                </LeftEntry>
                <RightEntry>
                    <TextCenterContainer>
                        <Text>{textFragment}</Text>
                    </TextCenterContainer>
                </RightEntry>
            </TwoGrid>
        </Container>
    );
};

const textFragment = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
