import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container app-container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Search defaultWord="hello" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
