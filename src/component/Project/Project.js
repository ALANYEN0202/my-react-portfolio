import React from "react";
import styled from "styled-components";
import gitLogo from "../img/2.png";
import { MEDIA_QUERY_MD } from "../../constans/style"


const Wrapper = styled.div`
  text-align: center;
  width: 20%;
  margin: 10px;

  ${MEDIA_QUERY_MD} {
    width: 80%;
    margin: 0 auto;
    padding-top: 40px;
  }
`
const Img = styled.img`
  width: 100%;
  cursor: pointer;
`
const Link = styled.a``

const Description = styled.div``

const InfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  padding: 5px;
`;

const SourceCode = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 255, 0.7);;

  &:hover {
    color: rgba(0, 0, 255, 1);;
  }
`

const GitLogo = styled.img`
  background: rgba(0, 0, 255, 0.7);
  margin-right: 5px;
`

const Title = styled.h2`
  margin: 0px;
`

const TitleContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
`

export default function Project({ imgSrc, projectLink, title, children, soureceCodeLink}) {
  return (
    <Wrapper>
      <Link href={projectLink}>
        <Img src={imgSrc}/>
      </Link>
      <TitleContainer>
        <Title>{title}</Title>
        <Description>{children}</Description>
      </TitleContainer>
      <InfoContainer>
        <SourceCode href={soureceCodeLink}><GitLogo src={gitLogo} alt="gitLogo"/>
        Source Code
        </SourceCode>
      </InfoContainer>
    </Wrapper>
  )
}
