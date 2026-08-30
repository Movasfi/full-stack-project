import { useAuth } from "@/hooks/useAuth";
import LoadingPage from "@/pages/LoadingPage";
import { Navigate, Outlet } from "react-router";


const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()
    console.log(isAuthenticated);

    if (isLoading) {
        return <LoadingPage />
    }


    if (!isAuthenticated) {


        return <Navigate to={"/login"} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;