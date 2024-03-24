import './App.css';
import Headre from './components/Header/Headre';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import Base from './components/base/Base';
import Footer from './components/footer/Footer';
import Instrection from './components/instrection/Instrection';
import Program from './components/program/Program';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
   <>
      <Headre/>
      <Home/>
      <Instrection/>
      <Program/>
      <Journey/>
      <Testimonial/>
      <Footer/>
      <Base/>
   </>

  
  );
}

export default App;
