import {
    createContext,
    type ReactNode,
} from "react";
import useMe from "@/hooks/useMe";
import type { IUser } from "@/modules/admin/dashboard/types";

interface IAuthContext {
    user: IUser | null
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface IProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {


    const { data: user, isLoading } = useMe();
    console.log(user);


    const value: IAuthContext = {
        user: user ?? null,
        isLoading,
        isAuthenticated: !!user
    };

    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};