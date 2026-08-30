import { logout } from "@/services/logout"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logout,
        mutationKey: ["logout"],
        onSuccess: () => {
            queryClient.setQueryData(['me'], null   );
        },

    });
};

export default useLogout