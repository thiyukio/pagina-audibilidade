import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Button({url, onClick, children}) {
  const redirect = () => {
    window.open(url, "_blank");
  }
  return (
    <button onClick={url ? () => redirect() : onClick}>
      {children}
    </button>
  )
}

function Header() {
  return (
    <div className='header'>
      <h4>
        TITULO DO PROJETO
      </h4>
      <Button url={'https://github.com/thiyukio/tcc-pcs-poli-2022-s18'}>
        <FontAwesomeIcon icon={faGithub} />
        REPO
      </Button>
    </div>
  )
}

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Uma proposta para acessibilidade de deficientes auditivos</h1>
      <Button> Saiba mais</Button>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
