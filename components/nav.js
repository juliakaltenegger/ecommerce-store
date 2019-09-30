import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  font-family: "Rock Salt", sans-serif;
  font-size: 12px;
  color: #000;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  border-color: #000;
  border-bottom: black;
  border-style: outset;
`;
const LogoContainer = styled.div`
  margin-right: 100px;
`;

const Logo = styled.img`
  width: 50px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;
  align-items: center;

  & a {
    text-decoration: none;
    color: #000;
  }
`;

const ImgCart = styled.img`
  width: 20px;
`;

const Nav = () => (
  <NavContainer>
    <StyledUl>
      <LogoContainer>
        <Logo src="/static/Group.svg" />

        <Link href="/">
          <a>Salsa Bliblablu</a>
        </Link>
      </LogoContainer>
      <li>
        <Link href="/#ueber-uns">
          <a>Über uns</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Salsas</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Rezepte</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Mexiko als Reisedestination</a>
        </Link>
      </li>
      <li>
        <ImgCart src="/static/shopping-cart.svg" />
      </li>
    </StyledUl>
  </NavContainer>
);

export default Nav;
