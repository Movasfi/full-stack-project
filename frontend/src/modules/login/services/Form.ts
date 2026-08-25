import api from "@/lib/api"
import type { IFormLogin } from "@/types/Form"
export const loginAuth = async (data: IFormLogin) => {
    await api.get("/sanctum/csrf-cookie");

    const response = await api.post('/login', {
        email: data.email,
        password: data.password,
    });
    return response
}