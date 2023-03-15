import React from "react";

const Header = ({ cl, title, sub }) => {
  return (
    <header className={`${cl}-title`}>
      <h2 className='section-title'>
        {title}
        <span>{sub}</span>
      </h2>
    </header>
  );
};

export default Header;
