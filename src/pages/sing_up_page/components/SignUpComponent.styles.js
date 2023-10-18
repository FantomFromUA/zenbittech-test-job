import styled from "styled-components";
import {Link} from "react-router-dom";

export const Section = styled.div`
`

export const Container = styled.div`
  display: flex;
  
`

export const SideImage = styled.img`
  width: 60%;
  overflow: hidden;
  height: 95vh;
  flex: 60%;
`

export const LoginContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
`

export const MainText = styled.h2`
    font-size: calc(1.5vw + 0.5rem);
    margin-bottom: 10px;
`

export const SecondaryText = styled.p`
  font-size: calc(1vw + 0.2rem);
  margin-top: 20px;
  margin-bottom: 0;
`
export const TextField = styled.input`
  height: 5vh;
  border-radius: 10px;
  border: none;
  padding-left: 20px;
  background-color: #E0E0E0;
`

export const LinkText = styled(Link)`
  color: #AF9F81;
  text-align: end;
  text-decoration: none;
  margin-top: 10px;
  
  &:hover{
    text-decoration: underline;
  }
`

export const LogInButton = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: #AF9F81;
  color: white;
  border: none;
  padding: 20px;
  margin-top: 30px;
  font-size: calc(1vw + 0.2rem);
`

export const ThirdText = styled.p`
  text-align: center;
`

export const ErrorText = styled.p`
  text-align: center;
  color: red;
`