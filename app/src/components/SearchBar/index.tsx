import { useState } from "react";
import { SearchBarIcon } from "./SearchIcon";

interface SearchBarProps {
  onSubmit: (url: string) => void;
}
const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [url, setUrl] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(url);
  };

  const handleAutoFill = () => {
    setUrl("https://github.com/Carlos0934/github-history-tracker");
  };

  return (
    <div className="flex flex-col min-w-[450px] mt-3">
      <form onSubmit={handleSubmit}>
        <h3 className="font-medium text-primary-100">
          Enter a Github repository URL
        </h3>
        <div className="flex-col ">
          <div className="py-1 w-full mt-1.5 px-1.5 flex bg-transparent border rounded-lg border-primary-300 focus-within:bg-primary-800  focus-within:border-primary-700     ">
            <SearchBarIcon />

            <input
              id="searchBar"
              type="url"
              required
              title="Enter a valid Github repository URL"
              className="w-full text-gray-100 bg-transparent focus:outline-none placeholder:primary-300"
              placeholder="https://github.com/owner/repository"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              pattern="^https:/\/github\.com\/[a-zA-Z0-9_\-]+\/[a-zA-Z0-9_\-]+$"
            />
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-4 ">
          <button className="px-3 py-1 font-semibold transition rounded bg-primary-500 text-gray-50 hover:bg-primary-600">
            Search
          </button>

          <button
            type="button"
            onClick={handleAutoFill}
            className="px-3 py-1 font-semibold transition border rounded border-primary-500 text-gray-50 hover:bg-primary-600"
          >
            Auto fill
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
