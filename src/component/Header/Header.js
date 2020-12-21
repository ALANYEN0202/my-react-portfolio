import React from "react";
import styled from "styled-components";
import gitLogo from "../img/2.png"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 50px;
`
const Title = styled.div`
  color: white;
`
const Info = styled.a`
  text-decoration: none;
  margin-left: 15px;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`

const Img = styled.img``


export default function Header() {
  return (
    <Wrapper>
      <Title>Alan React Portfolio</Title>
      <Info href="https://github.com/Lidemy/mentor-program-4th-ALANYEN0202"><Img src={gitLogo} />GitHub</Info>
    </Wrapper>
  )
}
