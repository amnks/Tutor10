import './App.css';
import Nav from './components/Navbar/Nav';
import Hero from './components/Hero/Hero';
import OurApproach from './components/OurApproach/OurApproach';
import Footer from './components/Footer/Footer';
import Mentors from './components/Mentors/Mentors';
import Carousal from './components/Carousal/Carousal';
import SwiperCarousel from './components/SwiperCarousel/SwiperCarousel';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <OurApproach></OurApproach>
      {/* <Whyus/> */}
      <SwiperCarousel/>
      <Mentors/>
      <Footer/>

    </div>
  );
}

export default App;
