import api from "@/lib/api"

export const getTasks = async () => {

    const response = await api.get('api/users');
    console.log(response);

    return response
}