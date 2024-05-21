import "./App.css";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Work from "./containers/Work";
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
      <Work />
      <Projects />
      <Contact />
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
