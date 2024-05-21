import "./App.css";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Projects from "./containers/Projects";
import Hero from "./containers/Hero";
import Header from "./containers/Header";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
