import api from "@/lib/api";
import type { IUser } from "@/modules/admin/dashboard/types";

export const getUser = async (): Promise<IUser | null> => {
    const response = await api.get<IUser | null>('api/me');
    
    return response.data;
};