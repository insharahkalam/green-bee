import './App.css';
import BestFood from './Components/BestFood';
import CardsSection from './Components/CardsSection';
import Deals from './Components/Deals';
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
      <Deals />
      <Footer />

    </>
  );
}

export default App;
