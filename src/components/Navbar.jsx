import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {mobile, tablet} from "../responsive"

const Container= styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})};
`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "10px"})};
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})};
    ${tablet({width: "70px"})};
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})};
    ${tablet({marginLeft: "10px"})};
`

const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "left"})};
    ${tablet({ justifyContent: "center"})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: inherit;
    text-decoration:none;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color: "gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Link to={`/`} style={{ textDecoration: 'none', color: "black" }}>
            <Logo>XAXI.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to={`/register`} style={{ textDecoration: 'none', color: "black" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={`/login`} style={{ textDecoration: 'none', color: "black" }}>   
            <MenuItem>SIGNIN</MenuItem>
          </Link>
          <Link to={`/cart`} style={{ textDecoration: 'none', color: "black" }}>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
    )
};

export default Navbar;
