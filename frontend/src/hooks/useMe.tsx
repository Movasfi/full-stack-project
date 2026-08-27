import { getUser } from "@/services/getUser";
import { useQuery } from "@tanstack/react-query";
interface UseMeOptions {
    enabled?: boolean;
}
const useMe = ({ enabled }: UseMeOptions) => {
    return useQuery({
        queryKey: ["me"],
        queryFn: getUser,
        staleTime: 5 * 60 * 1000,
        enabled,
    });
}

export default useMe