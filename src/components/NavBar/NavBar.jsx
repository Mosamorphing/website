import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./navbar.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mosamorphing",
    Icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mofasasi",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mosadoluwa-fasasi-4008b81a9/",
    Icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/mofasasi",
    Icon: FaXTwitter,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnScroll = () => {
      setIsOpen(false);
    };

    const closeOnOutsideTap = (event) => {
      if (navRef.current?.contains(event.target)) return;
      setIsOpen(false);
    };

    window.addEventListener("scroll", closeOnScroll, {
      once: true,
      passive: true,
    });
    document.addEventListener("pointerdown", closeOnOutsideTap);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
      document.removeEventListener("pointerdown", closeOnOutsideTap);
    };
  }, [isOpen]);

  return (
    <div className="bg-[#151414] sticky top-0 right-0 z-[999999999]">
      <nav ref={navRef} className="navbar layout__container py-[30px]">
        <button
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          Index {isOpen ? "-" : "+"}
        </button>

        {/* Menu */}
        <div className="">
          <div
            id="primary-navigation"
            className={`menu ${isOpen ? "open" : ""}`}
          >
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/work" onClick={closeMenu}>
                  Work
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/media" onClick={closeMenu}>
                  Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
