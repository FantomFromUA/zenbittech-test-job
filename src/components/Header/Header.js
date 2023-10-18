import React from "react";
import {AuthButtons, Container, HeaderStyles, Home, LogIn, LogOut, SignUp} from "./Header.styles";
import {useDispatch, useSelector} from "react-redux";

export const Header = () => {
    const {authorized} = useSelector(state => state);
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch({
            type: "LOG_OUT"
        })
    }

    return(
        <HeaderStyles>
            <Container>
                <Home to={"/"}>Home</Home>
                <AuthButtons>
                    {authorized
                        ?<LogOut onClick={logOut}>Log Out</LogOut>
                        :<>
                            <LogIn to={"/logIn"}>Log In</LogIn>
                            <SignUp to={"/signUp"}>Sign Up</SignUp>
                        </>
                    }
                </AuthButtons>
            </Container>
        </HeaderStyles>
    )
}