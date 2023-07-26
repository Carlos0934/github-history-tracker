import { useQuery } from "@tanstack/react-query";
import fetchBranches from "../services/fetchBranches";

interface Params {
  url: string;
}

function useFindProjectBranches({ url }: Params) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["branches", url],
    queryFn: () => fetchBranches({ url }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { branches: data, loading: isLoading, error };
}

export default useFindProjectBranches;
