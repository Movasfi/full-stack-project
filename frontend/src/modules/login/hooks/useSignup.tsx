import { useMutation } from '@tanstack/react-query';
import { loginAuth } from '../services/Form';
import { useNavigate } from 'react-router';

const useLogin = () => {
    const navgiate = useNavigate()
    return useMutation({
        mutationFn: loginAuth,
        onSuccess: () => {
            navgiate('/')
        }
    })
}

export default useLogin