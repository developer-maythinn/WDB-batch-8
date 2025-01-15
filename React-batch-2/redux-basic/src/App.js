import logo from "./logo.svg";
import "./App.css";
import SwitchTheme from "./components/SwitchTheme";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="App">
      <SwitchTheme />
      <BooksList />
    </div>
  );
}

export default App;
