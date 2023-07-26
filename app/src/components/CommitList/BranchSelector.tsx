interface BranchSelectorProps {
  branches: string[];
  onChange: (branch: string) => void;
  currentBranch: string;
}

export function BranchSelector({
  branches,
  currentBranch,
  onChange,
}: BranchSelectorProps) {
  return (
    <div className="flex items-center">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        className="w-6 h-6 text-current text-white fill-current"
      >
        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
      </svg>
      <select
        id="branches"
        value={currentBranch}
        onChange={(e) => onChange(e.target.value)}
        className=" text-sm rounded block px-1 py-1.5 bg-transparent  text-primary-50 "
      >
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
      <label
        htmlFor="branches"
        hidden
        aria-hidden="true"
        className="block ml-auto text-sm font-medium sr-only text-primary-50"
      ></label>
    </div>
  );
}
