import { useAuth } from "@/hooks/useAuth";
import LoadingPage from "@/pages/LoadingPage";
import { Navigate, Outlet } from "react-router";

const GuestRoute = () => {
    const { user, isAuthenticated, isLoading } = useAuth();
    if (isLoading) {
        return <LoadingPage />;
    }

    if (isAuthenticated) {
        if (user && user?.role === "admin") {
            return <Navigate to="/admin" replace />
        }
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default GuestRoute