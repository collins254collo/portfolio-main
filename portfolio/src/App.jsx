import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
