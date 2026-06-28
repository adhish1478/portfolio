import { useState, useEffect } from "react";
import data from "../../placeholders.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: data.labels.navProjects, href: "#projects" },
    { label: data.labels.navExperience, href: "#experience" },
    { label: data.labels.navAbout, href: "#about" },
    { label: data.labels.navContact, href: "#contact" }
  ];

  return (
    <nav
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "frosted border-outline-variant/30" : "border-outline-variant/0"
      }`}
    >
      <div className="flex justify-between items-center w-full px-md lg:px-offset-col py-sm">
        <span className="font-code-md text-code-md font-bold text-primary">
          {data.labels.logo}
        </span>
        <div className="hidden md:flex gap-lg items-center">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="bg-primary text-on-primary px-md py-xs text-body-sm font-semibold rounded-DEFAULT hover:bg-secondary transition-colors cursor-pointer active:opacity-70 text-center"
            href={`#${data.labels.navContact.toLowerCase()}`}
          >
            {data.labels.hireMe}
          </a>
        </div>
      </div>
    </nav>
  );
}
