import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdMic, MdVideoCall, MdOutlineApps } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

const FirstHeader = () => {
  return (
    <Container>
      <Left>
        <MenuIcon>
          <AiOutlineMenu />
        </MenuIcon>
        <Logo src="/image/Youtube icon.svg" />
        <Textlogo>YouTube</Textlogo>
        <Ng>
          <Ngtext>
            <span>NG</span>
          </Ngtext>
        </Ng>
      </Left>
      <Mid>
        <InputHolder>
          <Input placeholder="Search" />
          <SearchIcon>
            <BiSearch />
          </SearchIcon>
        </InputHolder>
        <MicIcon>
          <MdMic />
        </MicIcon>
      </Mid>
      <Right>
        <Icon>
          <MdVideoCall />
        </Icon>
        <Icon>
          <MdOutlineApps />
        </Icon>
        <Icon>
          <IoIosNotificationsOutline />
        </Icon>
        <Profile>S</Profile>
        <Notification>
          <Textnote>
            <span>9+</span>
          </Textnote>
        </Notification>
      </Right>
    </Container>
  );
};

export default FirstHeader;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const MenuIcon = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  margin-left: 20px;
`;

const Mid = styled.div`
  align-items: center;
  display: flex;
  flex: 0.6;
`;

const InputHolder = styled.div`
  display: flex;
  outline: 1px solid rgba(0,0,0,0.2);
  flex: 1;
  align-items: center;
`;

const Input = styled.input`
  height: 35px;
  background: white;
  flex: 1.1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 17px;
  outline: 1px solid rgba(0,0,0,0.2);
  padding-left: 10px;
`;

const SearchIcon = styled.div`
  padding: 0 20px;
  font-size: 23px;
  display: flex;
  align-items: center;
`;

const MicIcon = styled.div`
background: #F9F9F9;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  border-radius: 100px;
  margin-left: 10px;
`;

const Right = styled.div`
  display: flex;
 position: relative;
`;

const Icon = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Profile = styled.div`
  background: #5D4038;
  border-radius: 100px;
  height: 40px;
  color: white;
  font-weight: 400;
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Textlogo = styled.div`font-size: 20px;
font-weight: 900;`

const Notification = styled.div`
position: absolute;
top: 6px;
left: 104px;
cursor: pointer;
`

const Textnote = styled.div`padding: 0 4px;
background: #CC0000;
border-radius: 40px;
font-size: 11px;
color: white;`

const Ng = styled.div`position: absolute;
top: 15px;
left: 190px;
font-size: 10px;
`

const Ngtext = styled.div`padding: 0 2px;`

