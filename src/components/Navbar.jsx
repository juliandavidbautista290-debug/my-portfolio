import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "skills", "experience", "stats", "projects", "contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="logo">JULIÁN.DEV</div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={active === link ? "active" : ""}
            onClick={() => {
              setActive(link);
              setOpen(false);
            }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;