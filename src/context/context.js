import { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // State for App Loading
  const [loading, setLoading] = useState(false);

  // State for Modal (Form Submission)
  const [modalActive, setModalActive] = useState(false);

  // State for sticky Navbar
  const [scrolled, setScrolled] = useState(false);

  // Sticky Navbar on Scroll
  const stickyNavbar = () => {
    const offset = window.scrollY;
    offset > 30 ? setScrolled(true) : setScrolled(false);
  };

  // Navigate to section when Navbar link or Mobile link is clicked
  const goToSection = (e, num = 0) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    let location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - num,
    });
  };

  // Highlight links in Navbar and Mobile menu as the page is scrolled to the section
  const highlightLinksOnScroll = (
    linkType,
    classType,
    offset1 = 80,
    offset2 = 81
  ) => {
    const sections = document.querySelectorAll(".section");
    const links = document.querySelectorAll(linkType);
    const titles = document.querySelectorAll(".section-title");

    const offset = window.scrollY;

    const section1 = sections[0].offsetTop - offset1;
    const section2 = sections[1].offsetTop - offset2;
    const section3 = sections[2].offsetTop - offset2;
    const section4 = sections[3].offsetTop - offset2;

    const link1 = links[0];
    const link2 = links[1];
    const link3 = links[2];
    const link4 = links[3];

    const sTitle1 = titles[0];
    const sTitle2 = titles[1];
    const sTitle3 = titles[2];

    if (offset > section1) {
      link1.classList.add(classType);
    }
    if (offset > section2) {
      link1.classList.remove(classType);
      link2.classList.add(classType);
      sTitle1.classList.add("section-title-active");
    }
    if (offset > section3) {
      link2.classList.remove(classType);
      link3.classList.add(classType);
      sTitle1.classList.remove("section-title-active");
      sTitle2.classList.add("section-title-active");
    }
    if (offset >= section4) {
      link3.classList.remove(classType);
      link4.classList.add(classType);
      sTitle2.classList.remove("section-title-active");
      sTitle3.classList.add("section-title-active");
    }
    if (offset < section4) {
      link4.classList.remove(classType);
      sTitle3.classList.remove("section-title-active");
    }
    if (offset < section3) {
      link3.classList.remove(classType);
      sTitle2.classList.remove("section-title-active");
    }
    if (offset < section2) {
      link2.classList.remove(classType);
      sTitle1.classList.remove("section-title-active");
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        goToSection,
        highlightLinksOnScroll,
        modalActive,
        setModalActive,
        scrolled,
        stickyNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
