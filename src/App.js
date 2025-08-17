import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          <small>Coded by Bahareh Viani | <a href="https://github.com/BaharehViani/dictionary-app" rel="noreferrer" target="_blank">GitHub Repo</a></small>
        </footer>
      </div>
    </div>
  );
}

export default App;
