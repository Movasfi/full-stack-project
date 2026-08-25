import { useMutation } from "@tanstack/react-query"
import { signupUser } from "../services/signup"
import { useNavigate } from "react-router"
import type { IFormSingUp } from "@/types/Form"
import type { AxiosError } from "axios"
interface ValidationResponse {
    message: string;
    errors?: Record<string, string[]>;
}
const useSignup = () => {
    const navgaite = useNavigate()
    return useMutation<unknown, AxiosError<ValidationResponse>, IFormSingUp>({
        mutationFn: signupUser,
        onSuccess: () => {
            navgaite('/login');
        }
    })
}

export default useSignup