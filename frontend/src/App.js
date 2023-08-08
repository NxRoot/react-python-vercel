import logo from './logo.svg';
import {useEffect, useState} from "react"
import './App.css';

function App() {

  const [text, setText] = useState("Fetching...")

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.text())
      .then(setText)
      .catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
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
    </div>
  );
}

export default App;
