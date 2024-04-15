import './App.css';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import Services from './components/Services';

function App() {
  return (
    <>
      <div className="flex flex-col gap-[170px]">
        <div>
          <Header />
          <MainSlider />
        </div>
        <Services />
      </div>
    </>
  );
}

export default App;
