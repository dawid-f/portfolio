import React, { useContext, useEffect } from "react";
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
import { AppContext } from "./context/context";

const App = () => {
  const { loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setLoading]);

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
