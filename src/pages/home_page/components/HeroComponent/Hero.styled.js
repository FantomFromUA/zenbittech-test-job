import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: calc(100vh - 139px);
`

export const Background = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(26, 32, 48, .15), rgba(26, 32, 48, .15));
  }
  filter: brightness(30%)
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`
export const ContentWrapper = styled.div`
  display: block;
`

export const Title = styled.h1`
  color: #FFFFFF;
  line-height: 1.4;
  font-size: calc(2vw + 1em);
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px){
    font-size: calc(3.5vw + 1em);
  }
`

export const PreTitle = styled.p`
  color: #FFFFFF;
  font-size: calc(1.2vw + 0.5em);
  font-weight: 500;
  line-height: 1.2em;
  text-align: center;
  
  @media only screen and (max-width: 1024px){
    font-size: calc(1.7vw + 0.5em);
  }
  
`

export const GetStarted = styled.div`
  width: calc(8vw + 1rem);
  border: white solid 2px;
  border-radius: 5px;
  padding: 10px;
  color: white;
  text-align: center;
  cursor: pointer;
  margin: auto;

  &:hover{
    background: grey;
    color: white;
  }

  @media only screen and (max-width: 1024px){
    width: calc(10vw + 2rem);
    font-size: calc(1.7vw + 0.5em);
  }

`
