import api from "@/lib/api"


export const deleteUser = async (id: string) => {
    const response = await api.delete(`api/user/${id}`)
    return response
}