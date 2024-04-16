import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer className="App-footer text-center">
          This will be the footer
        </footer>
      </div>
    </div>
  );
}
