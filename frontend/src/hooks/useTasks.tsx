import { getTasks } from "@/services/getTasks"
import { useQuery } from "@tanstack/react-query"

const useTasks = () => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        enabled: true
    })
}

export default useTasks