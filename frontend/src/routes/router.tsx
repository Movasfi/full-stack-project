import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/modules/home/HomePage";
import LoginPage from "@/modules/login/LoginPage";
import { SignupPage } from "@/modules/signup/SignupPage";
import { createBrowserRouter } from "react-router";




export const routes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: 'login',
            element: <LoginPage />
        },
        {
            path: "signup",
            element: <SignupPage />
        },
    ]
}])
