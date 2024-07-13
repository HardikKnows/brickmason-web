import logo from "./assets/logo.png";
import "./App.css";
import FooterTabs from "./components/footer/FooterTabs";
import HeaderWindow from "./components/header/HeaderWindow";
import HeaderMobile from "./components/header/HeaderMobile";
import FooterUtils from "./components/footer/FooterUtils";
import Loader from "./components/common/Loader";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="text-center">
      {/* <Loader /> */}
      <HeaderMobile />
      <HeaderWindow />
      <Home></Home>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FooterUtils />
      <FooterTabs />
    </div>
  );
}

export default App;
