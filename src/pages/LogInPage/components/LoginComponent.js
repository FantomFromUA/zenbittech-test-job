import React from "react";

import sideImg from "./utils/img.jpg"
import {
    Container, ErrorText,
    Form, LinkText, LogInButton,
    LoginContainer,
    MainText,
    SecondaryText,
    Section,
    SideImage,
    TextField, ThirdText
} from "./LoginComponent.styles";
import {logIn} from "../../../http/userHttp";
import {useDispatch, useSelector} from "react-redux";

const LoginComponent = () => {

    const dispatch = useDispatch();
    const {authorized} = useSelector(state => state)

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState("");
    const [error, setError] = React.useState(false);

    const [isLogged, setIsLogged] = React.useState(authorized);
    const logInFunc = () => {
        if(!email || !password){
            setErrorMessage("Fill up all the fields!");
            setError(true);
            return;
        }

        logIn({email, password})
            .then(data => {
                dispatch({
                    type: "LOG_IN",
                    token: data.token
                })
                setIsLogged(true);
            })
            .catch(error => {
                setError(true);
                setErrorMessage("Invalid email or password");
            })
    }

    return(
        <Section>
            <Container>
                <SideImage src={sideImg} alt={"No image"}/>
                <LoginContainer>
                    {isLogged
                    ?<h1 style={{margin: "auto"}}>You has been successfully logged</h1>
                    :<Form>
                            <MainText>Login</MainText>
                            <SecondaryText>Email</SecondaryText>
                            <TextField
                                placeholder={'Email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <SecondaryText>Password</SecondaryText>
                            <TextField
                                placeholder={'Password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <ErrorText>{errorMessage}</ErrorText>}
                            <LinkText>Forgot password?</LinkText>
                            <LogInButton onClick={logInFunc}>Sign In</LogInButton>
                            <ThirdText>
                                Don`t have account? &#160;
                                <LinkText>Sign Up</LinkText>
                            </ThirdText>
                        </Form>
                    }
                </LoginContainer>
            </Container>
        </Section>
    )
}

export default LoginComponent;