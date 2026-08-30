import api from "@/lib/api"


export const logout = async () => {
    const response = await api.post('/logout');
    return response
}