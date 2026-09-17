import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../placeholders.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
        scrolled ? "frosted border-outline-variant/30 py-3" : "border-outline-variant/0 py-5"
      }`}
    >
      <div className="flex justify-between items-center w-full px-md lg:px-offset-col">
        {/* Brand Logo */}
        <a href="#" className="font-code-md text-code-md font-bold text-primary">
          {data.labels.logo}
        </a>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary hover:text-secondary focus:outline-none"
          aria-label="Toggle menu"
          id="menu-toggle-btn"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.829 4.828 4.829 4.829z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-outline-variant/30 px-md py-sm"
          >
            <div className="flex flex-col gap-sm">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  onClick={() => setIsOpen(false)}
                  className="font-body-md text-body-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 block"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
              <a
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-primary text-on-primary px-md py-xs text-body-sm font-semibold rounded-DEFAULT hover:bg-secondary transition-colors block"
                href={`#${data.labels.navContact.toLowerCase()}`}
              >
                {data.labels.hireMe}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
