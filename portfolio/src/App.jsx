import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Testimonials from "./components/testimonial";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulating API call delay
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <Home />
          <Skills />
          <Contact />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
