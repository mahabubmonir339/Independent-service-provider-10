
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import Services from './Components/Services/Services';

function App() {
  return (
    <>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>


    </>
  );
}

export default App;
