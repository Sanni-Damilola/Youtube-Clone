import React from "react";
import styled from "styled-components";
import Bodybox from "./Bodybox";

const Body = () => {
  return <Container>
    <Bodybox />
  </Container>;
};

export default Body;

const Container = styled.div`
  background: lightgray;
  
  width: 100%;
  height: calc(100vh - 60px - 50px);
  background: lightgray;
`;

