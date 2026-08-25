import api from "@/lib/api"
import type { IFormSingUp } from "@/types/Form"

export const signupUser = async (data: IFormSingUp) => {
    await api.get('/sanctum/csrf-cookie')

    const response = await api.post('api/signup', {
        name: data.name,
        email: data.email,
        password: data.password
    })
    return response
}