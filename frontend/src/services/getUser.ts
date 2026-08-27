import api from "@/lib/api"

export const getUser = async () => {

    const response = await api.get('api/me');
    return response
}