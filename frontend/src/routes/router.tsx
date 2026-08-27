import ProtectedRoute from "@/auth/ProtectedRoute";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/modules/home/HomePage";
import useLogin from "@/modules/login/hooks/useLogin";
import LoginPage from "@/modules/login/LoginPage";
import ProfilePage from "@/modules/profile/ProfilePage";
import { SignupPage } from "@/modules/signup/SignupPage";
import { createBrowserRouter } from "react-router";



export const routes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            element: (
                <ProtectedRoute />
            ),
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "profile",
                    element: <ProfilePage />,
                },
            ],
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
