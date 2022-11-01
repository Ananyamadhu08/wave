import React from "react";

function Footer() {
  return (
    <footer
      className="h-12 text-2xl flex gap-8 justify-center items-center shadow-inner  bg-slate-900 dark:bg-cyan-900 text-cyan-100 fixed w-full z-20"
      style={{ bottom: 0 }}
    >
      <a
        href="https://github.com/Ananyamadhu08"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://twitter.com/AnanyaMadhu27"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.linkedin.com/in/ananya-madhu-74479b206/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
