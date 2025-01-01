import logo from './logo.svg';
import './App.css';
import addTwo, { addThree } from './helper';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Bag from './components/Props/Bag';
import Shop from './components/PropsChildren/Shop';
import Products from './components/Props/Pratice/Products';
import ClickEvent from './components/Events/ClickEvent';
import SimpleUseState from './components/Hooks/UseState/SimpleUseState';
import InputWithUseState from './components/Hooks/UseState/InputWithUseState';
import SelectedImage from './components/Hooks/UseState/SelectedImage';
import InputFormUseState from './components/Hooks/UseState/InputFormUseState';
import CRUD from './components/Hooks/UseState/CRUD';
import APIData from './components/Hooks/UseEffect/APIData';
import SimpleUseEffect from './components/Hooks/UseEffect/SimpleUseEffect';
import Clock from './components/Hooks/UseEffect/Clock';
import ComponentA from './components/Hooks/PropsDrilling/ComponentA';

function App() {

  return (
    <div className="App">
      <ComponentA />
      {/* <Clock /> */}
      {/* <SimpleUseEffect /> */}
      {/* <APIData /> */}
      {/* <CRUD /> */}
      {/* <InputFormUseState /> */}
      {/* <SelectedImage /> */}
      {/* <InputWithUseState /> */}
      {/* <SimpleUseState /> */}
      {/* <ClickEvent /> */}
      {/* <header className="App-header">
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
      </header> */}
       {/* <Bag /> */}
       
       {/* <Shop children="Hello" />
       <Shop children={<h1>Book</h1>} />
       <Shop>
          <h2>Hello H2</h2>
          <p>This is p</p>
       </Shop> */}
       {/* <Products />
       <img src="/img1.webp" alt="img" /> */}

    </div>
  );
}

export default App;
