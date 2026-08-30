import { getUser } from "@/services/getUser";
import { useQuery } from "@tanstack/react-query";

const useMe = () => {


    return useQuery({
        queryKey: ["me"],
        queryFn: getUser,
        retry: false,
        staleTime: 1000 * 5 * 60,
    });
}

export default useMe