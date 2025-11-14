import './App.css';
import BestFood from './Components/BestFood';
import CardsSection from './Components/CardsSection';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import OurProducts from './Components/OurProducts';
import Slider from './Components/Slider';

function App() {
  return (
    <>

      <Navbar />
      <Slider />
      <CardsSection />
      <BestFood />
      <OurProducts />
      <Footer />

    </>
  );
}

export default App;
