import { useEffect, useRef, useState } from "react";
import useFindProjectBranches from "../../hooks/useFindProjectBranches";
import { CommitListHeader } from "./Header";
import { CommitListItem } from "./Item";
import { BranchSelector } from "./BranchSelector";
import useFindProjectCommits from "../../hooks/useFindProjectCommits";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { CommitListLoading } from "./Loading";

interface CommitListProps {
  url: string;
}
function CommitList({ url }: CommitListProps) {
  const [branch, setBranch] = useState<string>();

  const { branches } = useFindProjectBranches({ url });
  const { commits, fetchNextPage, hasNextPage, loading, isFetching, refetch } =
    useFindProjectCommits({
      url,
      branch,
    });
  const lastElementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setBranch(branches?.[0]);
  }, [branches]);

  useIntersectionObserver(lastElementRef, fetchNextPage, { threshold: 0.5 });

  if (loading) return <CommitListLoading />;
  return (
    <div className="p-2 mt-10 rounded bg-primary-800">
      <CommitListHeader
        branchCount={branches?.length || 0}
        url={url}
        isRefreshing={isFetching}
        onRefresh={refetch}
      >
        {branch && (
          <BranchSelector
            currentBranch={branch}
            onChange={setBranch}
            branches={branches || []}
          />
        )}
      </CommitListHeader>

      <ul className="overflow-y-auto h-[300px] ">
        {commits?.map((commit, i, commits) => (
          <CommitListItem
            key={commit.sha}
            data={commit}
            ref={
              i === commits.length - 1 && hasNextPage
                ? lastElementRef
                : undefined
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default CommitList;
