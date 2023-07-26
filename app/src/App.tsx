import { useState } from "react";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [url, setUrl] = useState<string>();
  return (
    <div className="flex flex-col items-center pb-10 ">
      <Header />

      <main className="text-center">
        <SearchBar onSubmit={setUrl} />
        {url && <CommitList url={url} />}
      </main>
    </div>
  );
}

export default App;
