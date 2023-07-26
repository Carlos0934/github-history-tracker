interface CommitListHeaderProps {
  url: string;
  branchCount?: number;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  children?: React.ReactNode;
}

export function CommitListHeader({
  url,
  branchCount,
  onRefresh,
  isRefreshing,
  children,
}: CommitListHeaderProps) {
  return (
    <header className="border-b border-primary-400">
      <h2 className="text-2xl font-semibold text-primary-100">
        <a
          href={url}
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {url?.split("/").slice(-2).join("/")}
        </a>
      </h2>

      <div className="flex items-center px-2 mt-3">
        {children}
        <p className="text-sm text-primary-300">
          {branchCount} {branchCount === 1 ? "branch" : "branches"}
        </p>

        <button
          className="ml-auto disabled:bg-primary-800 disabled:animate-spin"
          title="Refresh"
          onClick={onRefresh}
          disabled={isRefreshing}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
