import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileMenu,
  Footer,
  Modal,
  Loader,
  Home,
  About,
  Projects,
  Contact,
} from "./components/index";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Navbar />
      <MobileMenu />
      <Modal />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default App;
