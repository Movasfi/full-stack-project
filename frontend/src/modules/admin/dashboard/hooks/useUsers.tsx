import { useQuery } from "@tanstack/react-query"
import { getUsers, getUsersCount } from "../services/getUsers"

const useUsers = () => {
    const usersRes = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        staleTime: 1000 * 5 * 60,
        retry: 2,
    })

    const usersCountRes = useQuery({
        queryKey: ['usersCount'],
        queryFn: getUsersCount,
        staleTime: 1000 * 5 * 60,
        retry: 2,
    })

    return {
        usersRes,
        usersCountRes
    }
}

export default useUsers