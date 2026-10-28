import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
