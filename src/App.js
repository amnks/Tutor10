import './App.css';
import Nav from './components/Navbar/Nav';
import Hero from './components/Hero/Hero';
import OurApproach from './components/OurApproach/OurApproach';
import Whyus from './components/WhyUS/Whyus';
import Mentors from './components/Mentors/Mentors';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <OurApproach></OurApproach>
      <Whyus/>
      <Mentors/>
    </div>
  );
}

export default App;
