import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="garden" />
        <footer>
          <small>Coded by Bahareh Viani | <a href="https://github.com/BaharehViani/dictionary-app" rel="noreferrer" target="_blank">GitHub Repo</a></small>
        </footer>
      </div>
    </div>
  );
}

export default App;
