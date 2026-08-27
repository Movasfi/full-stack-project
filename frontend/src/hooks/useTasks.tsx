import { getTasks } from "@/services/getTasks"
import { useQuery } from "@tanstack/react-query"

const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        staleTime: 5 * 60 * 1000,
    })
}

export default useTasks