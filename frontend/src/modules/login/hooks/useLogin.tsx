import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAuth } from "../services/Form";
import { useNavigate } from "react-router";

const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: loginAuth,

        onSuccess: (data) => {
            queryClient.setQueryData(["me"], data.data.user);

            navigate("/");
        },
    });
};

export default useLogin;