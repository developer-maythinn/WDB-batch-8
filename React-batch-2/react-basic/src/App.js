import logo from './logo.svg';
import './App.css';
import addTwo, { addThree } from './helper';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {addTwo(2, 4)}
        <br />
        {addTwo(5, 10)}
        <br />
        {addThree(2, 4, 6)}
        <Welcome />
        <Message />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
