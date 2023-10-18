import HomePage from "./home_page/HomePage";
import LogInPage from "./LogInPage/LogInPage";
import SignUpPage from "./sing_up_page/SignUpPage";

const pagesData = [
    {
        path: '/',
        element: <HomePage/>,
        title: "Home page"
    },
    {
        path: '/logIn',
        element: <LogInPage/>,
        title: "Log In"
    },
    {
        path: '/signUp',
        element: <SignUpPage/>,
        title: "Sign Up"
    }
]

export default pagesData;