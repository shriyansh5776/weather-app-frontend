import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import LoginPage from "../pages/Login/LoginPage.jsx";
import RegistrationPage from "../pages/register/RegistrationPage.jsx";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/register",
        element:<RegistrationPage/>
    },
])

export default routes