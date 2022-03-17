import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Showcase } from "./components/Showcase/Showcase";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Showcase />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header> */}
    </div>
  );
}

export default App;
