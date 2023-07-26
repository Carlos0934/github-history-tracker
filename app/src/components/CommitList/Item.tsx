import { forwardRef } from "react";
import { Commit } from "../../types";
import formatDate from "../../utils/formatDate";

interface CommitListItemProps {
  data: Commit;
}

export const CommitListItem = forwardRef<HTMLLIElement, CommitListItemProps>(
  ({ data }, ref) => {
    return (
      <li
        className="flex items-center justify-between px-2 py-3 border-b border-primary-400"
        ref={ref}
      >
        <div className="flex items-center gap-3">
          <img
            src={data.author.avatar_url}
            alt={data.commit.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col text-left">
            <p className="text-sm font-medium text-primary-100">
              {data.commit.author.name}
            </p>
            <p className="text-xs text-primary-300">
              {formatDate(data.commit.author.date)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end ml-2">
          <p className=" text-sm text-primary-300 truncate  max-w-[400px]">
            {data.commit.message}
          </p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-primary-200 hover:underline"
          >
            View commit
          </a>
        </div>
      </li>
    );
  }
);
