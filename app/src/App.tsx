import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col items-center ">
      <Header />

      <main className="text-center">
        <SearchBar onSubmit={console.log} />
      </main>
    </div>
  );
}

export default App;
