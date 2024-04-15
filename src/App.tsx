import './App.css';
import Container from './components/Container';

function App() {
  return (
    <>
      <header className="header">
        <Container>
          <div className="header-inner py-[10px] flex items-center justify-between">
            <img src="/logo.svg" alt="" />
            <p className="text-black text-base leading-[140%]">Наш телефон: +993 (XX) XX-XX-XX</p>
          </div>
        </Container>
      </header>
    </>
  );
}

export default App;
