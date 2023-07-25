import githubMark from "../assets/github-mark.svg";

const Header = () => (
  <header className="flex flex-col items-center text-center">
    <div className="pt-10">
      <img src={githubMark} alt="Github logo" />
    </div>
    <h1 className="mt-3 text-4xl font-semibold text-white">
      Github History Tracker
    </h1>
  </header>
);

export default Header;
