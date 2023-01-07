import React from "react";
import styled from "styled-components";
import Box from "./Box";


const SecondHeader = () => {
  return (
    <Container>
      <Firsttext>
        <All>
          <span>All</span>
        </All>
      </Firsttext>
      <Box name="Damilola Sanni" />
      <Box name="Live" />
      <Box name="Mixes" />
      <Box name="Gaming" />
      <Box name="Avatar" />
      <Box name="Ronaldo" />
      <Box name="Elon Musk" />
      <Box name="Messi" />
      <Box name="Coding" />
      <Box name="Codelab" />
      <Box name="Music" />
    </Container>
  );
};

export default SecondHeader;


const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-right: none;
`;

const Firsttext = styled.div``


const All = styled.div`padding: 5px 15px;
background: #030303;
border-radius: 100px;
color: white;
margin-left: 20px;
`

