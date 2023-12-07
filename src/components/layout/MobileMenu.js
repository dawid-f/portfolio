import React, { useContext, useEffect } from "react";
import "./mobileMenu.scss";
import { links } from "../../utils/links";
import { AppContext } from "../../context/context";

const MobileMenu = () => {
  const { goToSection, highlightLinksOnScroll } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      highlightLinksOnScroll(".menu-link", "menu-link-active")
    );
  });

  return (
    <aside className='mobile-menu'>
      <div className='menu-inner'>
        {links.map(({ id, name, url, icon, menuCl }) => {
          return (
            <a
              key={id}
              href={url}
              className={`${menuCl}`}
              onClick={(e) => goToSection(e)}
            >
              {icon}
              <p>{name}</p>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default MobileMenu;
