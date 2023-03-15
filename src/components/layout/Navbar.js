import React, { useEffect, useContext } from "react";
import "./navbar.scss";
import { links } from "../../utils/links";
import { Logo } from "../index";
import { AppContext } from "../../context/context";

const Navbar = () => {
  const {
    scrolled,
    stickyNavbar,
    goToSection,
    highlightLinksOnScroll,
  } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    window.addEventListener("scroll", () =>
      highlightLinksOnScroll(".nav-link", "link-active", 80, 300)
    );
  });

  return (
    <nav className={`${scrolled ? "nav sticky" : "nav"}`}>
      <section className='nav-inner section-center'>
        <Logo />
        <div className='nav-links'>
          {links.map(({ id, name, url, navCl }) => {
            return (
              <a
                key={id}
                href={url}
                className={`${navCl}`}
                onClick={(e) => goToSection(e, 80)}
              >
                {name}
              </a>
            );
          })}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
