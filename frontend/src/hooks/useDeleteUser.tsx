import { deleteUser } from "@/services/deleteUser"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "./useAuth";

const useDeleteUser = () => {
    const queryClient = useQueryClient();
    const { user } = useAuth()
    return useMutation({
        mutationFn: (id: string) => deleteUser(id),
        mutationKey: ['delete-user'],
        onSuccess: async (_, id) => {


            queryClient.invalidateQueries({ queryKey: ['users'] });
            queryClient.invalidateQueries({ queryKey: ['usersCount'] });
            console.log(user?.id);
            console.log(id);
            
            if (user && String(user.id) === id) {

                queryClient.setQueryData(["me"], null);

            }
        }

    },)
}

export default useDeleteUser