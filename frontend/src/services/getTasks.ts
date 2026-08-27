import api from "@/lib/api"

export const getTasks = async () => {

    const response = await api.get('api/task');
    return response
}