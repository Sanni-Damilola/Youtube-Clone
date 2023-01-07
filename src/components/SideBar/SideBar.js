import React from "react";
import styled from "styled-components";
import Sidebox from "./Sidebox";

const SideBar = () => {
  return <Container>
    <Sidebox />
  </Container>;
};

export default SideBar;

const Container = styled.div`
  width: 7%;
  height: calc(100vh - 50vh);
`;
