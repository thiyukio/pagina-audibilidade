import logo from './logo.svg';
import perdaIdades from './media/PerdaIdades.png';
import audiograma from './media/Audiograma.png';
import android from './media/AndroidLogo.png';
import bancodeFiltros from './media/BancodeFiltros.png';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
        AUDIBILIDADE
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
      <Button className='learn-more button' onClick={learnMore}> Saiba mais <br/> ⬇⬇⬇</Button>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  )
}

function Section({title, image, children, ...args}) {
  return (
    <div className='section'>
        {image && (
          <img src={image} alt=''/>
        )}
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
      <Section title={"Dados da deficiência auditiva"} image={perdaIdades}>
        <p>A demanda por inclusão digital e acessibilidade é visível e crescente no cenário de desenvolvimento de software.</p>
        <p>A interação com sistemas e conteúdos se dá através dos sentidos dos usuários, e um dos sentidos comumente negligenciados é a audição.</p>
        <p>Perdas auditivas estão entre as principais deficiências observadas entre a população mundial, principalmente com o avanço da idade e alta exposição a ruídos. Esses dois agravantes se mostram em alta, com maiores expectativas de vida e ambientes cada vez mais ruidosos no mundo contemporâneo.</p>
        <p>Ao lado, vamos como as deficiências auditivas aumentam com a idade.</p>
      </Section>
      </div>
      <Section title={"A proposta"} image={audiograma}>
        <p>Tendo em vista as demandas acima, iniciamos um projeto para buscar uma melhoria na experiência de usuários com graus moderados de deficiência auditiva.
          Como ponto de partida, está sendo desenvolvido um simples reprodutor de áudios, com as configurações específicas da perda do usuário.
        </p>
        <p>Esses dados da perda auditiva são inseridos com informações de um Audiograma, exame que exibe resultados por faixas de frequência.</p> 
        <p>Não possui perda auditiva considerável? <a href='https://www.youtube.com/watch?v=I9G2gn59i2E&ab_channel=joek9191' target="_blank" rel="noreferrer">Este</a> vídeo pode te ajudar a entender um pouco como é a experiência.</p>
      </Section>
      <Section title={"Plataformas"} image={android}>
        <p>Os dispositivos mais utilizados no dia-a-dia, principalmente para pessoas mais idosas, são os celulares. Dentre eles, os que operam com sistema Android são os mais comuns.</p>  
        <p>Por isso, decidimos implementar a versão inicial do projeto em Android. Para isso, o projeto foi realizado inteiramente com o kit de desenvolvimento Android SDK</p>
      </Section>
      <Section title={"Por trás dos panos"} image={bancodeFiltros}>
        <p>Para processar independentemente cada uma das frequências indicadas pelo audiograma, foi implementado um sistema de filtros passa-faixa. Esses filtros dividem o áudio nas faixas necessárias.</p>
        <p>Tendo em mãos esses dados, é possível executar a amplificação, que depende da amostra de áudio, do audiograma e das características do fone de ouvido utilizado.</p>
        <p>E tudo isso em tempo real.</p>
      </Section>
      <Section title={"Perspectivas"}>
        <p>Esta é uma prova de conceito, com o objetivo de aprender e aplicar técnicas de processamento em um contexto específico de acessibilidade. Para o avanço e continuidade do projeto, é válida e essencial uma rodada massiva de testes de usuários, bem como refatorações de interface e usavilidade.</p>
        <p>Do lado tecnológico, além da expansão das plataformas atendidas, um próximo escopo é permitir o processamento de todo o áudio do aparelho, o que apresenta suas próprias dificuldades técnicas.</p>
      </Section>
      <Section title={"Nos acompanhe"} >
        <p>Este é um projeto de código aberto, é possível acompanhar o desenvolvimento através de nosso GitHub:</p>
        <Button className='large-button button' url={'https://github.com/thiyukio/tcc-pcs-poli-2022-s18'}>
          <FontAwesomeIcon icon={faGithub} />
          {" GitHub"}
        </Button>  
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
