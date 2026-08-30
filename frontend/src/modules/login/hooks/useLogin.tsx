import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAuth } from "../services/Form";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";

const useLogin = () => {
    // const navigate = useNavigate();
    const queryClient = useQueryClient();
    // const { isAuthenticated } = useAuth()
    return useMutation({
        mutationFn: loginAuth,

        onSuccess: (data) => {
            queryClient.setQueryData(["me"], data.data.user);


        },
    });
};

export default useLogin;