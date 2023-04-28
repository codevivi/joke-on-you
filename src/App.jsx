import "./App.css";
import Footer from "./components/Footer/Footer";
import Jokes from "./components/Jokes/Jokes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke on You</h1>
      </header>
      <main className="App-main">
        <Jokes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
