import React from "react";
import styled from "styled-components";

const Box = ({ name }) => {
  return (
      <Container>{name}</Container>
  );
};

export default Box;


const Container = styled.div`
  padding: 5px 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #F2F2F2;
  border-radius: 100px;
  margin-left: 15px;
`;


