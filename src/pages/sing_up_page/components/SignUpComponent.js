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
} from "./SignUpComponent.styles";
import {createAccount} from "../../../http/userHttp";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../../store/store";

const SignUpComponent = () => {

    const dispatch = useDispatch();
    const {authorized} = useSelector(state => state)

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState("");
    const [error, setError] = React.useState(false);

    const [isLogged, setIsLogged] = React.useState(authorized);

    const signUp = () => {
        if(!name || !email || !password){
            setErrorMessage("Fill up all the fields!");
            setError(true);
            return;
        }

        createAccount({name, email, password})
            .then(data => {
                dispatch({
                    type: "LOG_IN",
                    token: data.token
                })
                setIsLogged(true);
            })
            .catch(error => {
                setError(true);
                setErrorMessage(error.message);
            });
    }

    return(
        <Section>
            <Container>
                <SideImage src={sideImg} alt={"No image"}/>
                <LoginContainer>
                    {isLogged
                    ?<h1 style={{margin: "auto"}}>You has been successfully logged</h1>
                    :<Form>
                        <MainText>Sign Up</MainText>
                        <SecondaryText>Name</SecondaryText>
                        <TextField
                            placeholder={'Name'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <SecondaryText>Email</SecondaryText>
                        <TextField
                            placeholder={'Email'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <SecondaryText>Password</SecondaryText>
                        <TextField
                            type="password"
                            placeholder={'Password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <ErrorText>{errorMessage}</ErrorText>}
                        <LogInButton onClick={signUp}>Sign Up</LogInButton>
                        <ThirdText>
                            Have account? &#160;
                            <LinkText>Log In</LinkText>
                        </ThirdText>
                    </Form>
                    }
                </LoginContainer>
            </Container>
        </Section>
    )
}

export default SignUpComponent;