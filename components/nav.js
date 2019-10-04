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
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 2.3px;
`;

const Logo = styled.img`
  width: 100px;
  overflow: hidden;
  position: fixed;
  top: 0.3px;
  left: 10px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  white-space: nowrap;
  flex-direction: row;
  justify-content: space-evenly;
  text-decoration: none;

  & a {
    text-decoration: none;
    color: #000;
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
      <Link href="/">
        <a>
          <Logo src="/static/logo-with-background-real-thick.svg" />
          Salsa Bliblablu
        </a>
      </Link>

      <li>
        <Link href="/#about">
          <a>Über uns</a>
        </Link>
      </li>
      <li>
        <Link href="/#products">
          <a>Salsas</a>
        </Link>
      </li>
      <li>
        <Link href="/#recipes">
          <a>Rezepte</a>
        </Link>
      </li>
      <li>
        <Link href="/#mexico">
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
