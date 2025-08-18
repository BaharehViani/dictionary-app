import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="garden" />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/BaharehViani"
            rel="noreferrer"
            target="_blank"
          >
            Bahareh Viani
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/BaharehViani/dictionary-app"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Repo
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
