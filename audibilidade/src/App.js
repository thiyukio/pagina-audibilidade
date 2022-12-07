import logo from './logo.svg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';

function Button({url, onClick, children, ...args}) {
  const redirect = () => {
    window.open(url, "_blank");
  }
  return (
    <button className='button' onClick={url ? () => redirect() : onClick} {...args}>
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
        {" REPO"}
      </Button>
    </div>
  )
}

function Hero({learnMore}) {
  return (
    <div className='hero-container'>
      <h1>Uma proposta para acessibilidade de deficientes auditivos</h1>
      <Button className='learn-more button' onClick={learnMore}> Saiba mais</Button>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  )
}

function Section({title, image, children, ...args}) {
  return (
    <div className='section'>
        <img src={image} alt=''/>
        <div className='text-block'>
          {title && (
          <h2>
            {title}
          </h2>
          )}
          {children}
        </div>
    </div>
  )
}

function App() {
  const firstElementRef = useRef(null);

  const scrollToFirst = () => {
    firstElementRef.current.scrollIntoView({block: "start", behavior: "smooth"});
  }

  return (
    <div className="App">
      <Header/>
      <Hero learnMore={scrollToFirst}/>
      <div ref={firstElementRef} className='first-element'>
      <Section title={"Dados da deficiência auditiva"} image={logo}>
          Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
        </Section>
      </div>
        <Section title={"Dados da deficiência auditiva"} image={logo}>
          Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
        </Section>
        <Section title={"Dados da deficiência auditiva"} image={logo}>
          Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
        </Section>
        <Section title={"Dados da deficiência auditiva"} image={logo}>
          Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
        </Section>
        <Section title={"Dados da deficiência auditiva"} image={logo}>
          Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
        </Section>
        <Section title={"Dados da deficiência auditiva"} image={logo}>
          Exercitation aliqua laborum mollit esse nulla mollit adipisicing sit fugiat nisi magna ad ipsum quis. Sunt sit ea ullamco laborum. Ad veniam exercitation elit eiusmod proident laborum velit exercitation ad et fugiat. Quis ut nisi laborum irure officia reprehenderit officia pariatur laborum elit velit mollit. Sint labore magna ipsum ea non et quis aliqua veniam. Exercitation qui eu amet qui.
        </Section>
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
