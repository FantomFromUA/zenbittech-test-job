import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyles = styled.div`
  width: 100%;
  background: #192233;
  margin: 0;
  height: 5vh;
`

export const Container = styled.div`
  display: flex;
  padding-right: 50px;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`

export const AuthButtons = styled.div`
  display: flex;
  height: 100%;
`

export const LogIn = styled(Link)`
  width: calc(5vw + 1rem);
  border: #AF9F81 solid 2px;
  border-radius: 5px;
  background: #192233;
  padding: 10px;
  color: #AF9F81;
  text-align: center;
  margin: 1vh;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background: #b0a590;
    color: white;
  }
`

export const SignUp = styled(Link)`
  width: calc(5vw + 1rem);
  border-radius: 5px;
  background: #AF9F81;
  padding: 10px;
  color: white;
  text-align: center;
  margin: 1vh;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background: #a88f5d;
  }
`

export const LogOut = styled(Link)`
  width: calc(5vw + 1rem);
  border: #AF9F81 solid 2px;
  border-radius: 5px;
  background: #192233;
  padding: 10px;
  color: #AF9F81;
  text-align: center;
  margin: 1vh;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background: red;
    color: white;
    border: none;
  }
`

export const Home = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  font-size: calc(1.5vw + 0.3rem);
  color: white;
  align-self: center;

  &:hover{
    text-decoration: underline;
    font-weight: bold;
  }
`