import React from "react";
import styled from "styled-components";
import Body from "../Body/Body";
import FirstHeader from "../Header/FirstHeader";
import SecondHeader from "../Header/SecondHeader";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <Container>
      <FirstHeader />
      <Rest>
        <SideBar />
        <MainContainer>
          <SecondHeader />
          <Body />
        </MainContainer>
      </Rest>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Rest = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
`;

// const Container = styled.div``
