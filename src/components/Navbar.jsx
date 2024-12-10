import React, { useEffect, useState } from "react";

const Navbar = ({ links = [], logoHref = "/", children }) => {
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    const element = document.querySelector("header");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <header>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          {/* Logo */}
          <a href={logoHref} className="duration-200 text-zinc-300 hover:text-zinc-100">
            {/* Logo can go here */}
          </a>

          {/* Navbar Links */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-6 w-full sm:w-auto">
            {Array.isArray(links) && links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Render children inside the Navbar */}
          {children && <div className="ml-4">{children}</div>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
