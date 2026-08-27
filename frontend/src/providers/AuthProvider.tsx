import {
    createContext,
    type ReactNode,
} from "react";
import useMe from "@/hooks/useMe";
import type { AxiosResponse } from "axios";
import { useLocation } from "react-router";

interface IAuthContext {
    user: AxiosResponse | null
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface IProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
    const location = useLocation();

    const isAuthPage =
        location.pathname === "/login" ||
        location.pathname === "/signup";
    const { data: user, isLoading } = useMe({
        enabled: !isAuthPage,
    });

    const value: IAuthContext = {
        user: user ?? null,
        isLoading,
        isAuthenticated: user ? true : false
    };

    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};