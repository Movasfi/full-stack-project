import { getTasks } from "@/services/getTasks"
import { useQuery } from "@tanstack/react-query"
interface IProps {
    enabled?: boolean
}
const useTasks = ({ enabled }: IProps) => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        enabled,
        staleTime: 5 * 1000 * 60
    })
}

export default useTasks