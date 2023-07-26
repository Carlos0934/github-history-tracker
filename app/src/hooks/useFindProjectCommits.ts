import { useInfiniteQuery } from "@tanstack/react-query";
import fetchCommits from "../services/fetchCommits";
import { useMemo } from "react";

interface Params {
  url: string;
  branch?: string;
}

function useFindProjectCommits({ url, branch }: Params) {
  const {
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    data,
    refetch,
    error,
  } = useInfiniteQuery({
    queryKey: ["commits", url, branch],
    queryFn: ({ pageParam = 1 }) => {
      if (!pageParam) return [];
      return fetchCommits({ url, branch, page: pageParam });
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return null;
      return pages.length + 1;
    },
    refetchOnMount: false,
  });

  const commits = useMemo(() => data?.pages.flat(), [data]);
  return {
    commits,
    loading: isLoading,
    isFetching,
    error,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
}

export default useFindProjectCommits;
