import GuestRoute from "@/auth/GuestRoute";
import ProtectedRoute from "@/auth/ProtectedRoute";
import MainLayout from "@/components/layout/MainLayout";
import AddUser from "@/modules/admin/add-user/AddUser";
import Dashboard from "@/modules/admin/dashboard/Dashboard";
import HomePage from "@/modules/home/HomePage";
import LoginPage from "@/modules/login/LoginPage";
import ProfilePage from "@/modules/profile/ProfilePage";
import { SignupPage } from "@/modules/signup/SignupPage";
import { createBrowserRouter } from "react-router";



export const routes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            element: <ProtectedRoute />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "profile",
                    element: <ProfilePage />,
                },
                {
                    path: "admin",
                    element: <Dashboard />,
                },
                {
                    path: "users/edit/:id",
                    element: <div>edit user</div>,
                },
                {
                    path: "users/add",
                    element: <AddUser />,
                },

            ],
        },
        {
            element: <GuestRoute />,
            children: [
                {
                    path: "login",
                    element: <LoginPage />,
                },
                {
                    path: "signup",
                    element: <SignupPage />,
                },
            ],
        },

    ]
}])
