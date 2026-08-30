import api from "@/lib/api";
import type { IUsersResponse } from "../types";

export const getUsers = async (): Promise<IUsersResponse | null> => {
    const response = await api.get<IUsersResponse | null>('api/users');
    return response.data;
}

interface IAmountUsers {
    amount: {
        admin: number
        worker: number
    }

}

export const getUsersCount = async (): Promise<IAmountUsers | null> => {
    const response = await api.get<IAmountUsers | null>('api/users/count');
    return response.data
}