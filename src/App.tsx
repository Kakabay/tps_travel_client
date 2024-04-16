import './App.css';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
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
        <ContactUsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
