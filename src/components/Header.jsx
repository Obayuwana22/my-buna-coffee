import React from "react";
import logo from "../assets/png/Main Logo Left Gold.png";

const Header = () => {
  const handleKeepMeUpdated = () => {
    const formSection = document.getElementById("signup-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#126634]/95 backdrop-blur-sm border-b border-[#fec857]/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 w-24">
                <img src={logo} alt="my buna coffee logo" />
              {/* <Coffee className="w-8 h-8 text-[#fec857]" /> */}
              {/* <div className="text-xl font-bold text-[#fec857]">የኔ ቡና</div> */}
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-[#f2e2c7] hover:text-[#fec857] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#f2e2c7] hover:text-[#fec857] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[#f2e2c7] hover:text-[#fec857] transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <button
              onClick={handleKeepMeUpdated}
              size="sm"
              className="bg-[#fec857] px-4 py-1 rounded-full font-medium text-black hover:opacity-90 transition-opacity cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
