import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";


const ProtectedRoute = () => {

    const { isAuthenticated, isLoading } = useAuth()
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!isAuthenticated) {
        return <Navigate to={"/login"} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;