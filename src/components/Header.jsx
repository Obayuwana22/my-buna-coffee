import React from "react";
import logo from "../assets/png/buna-logo.png";
import * as motion from "motion/react-client";

const Header = ({setShowForm}) => {
  const handleKeepMeUpdated = () => {
    setShowForm(true);
    setTimeout(() => {
      const formSection = document.getElementById("signup-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
      }}
      className=""
    >
      {/* Header Navigation */}
      <header className=" bg-[#126634]/95 backdrop-blur-sm border-b border-[#fec857]/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 w-24">
              <img src={logo} alt="my buna coffee logo" />
              {/* <Coffee className="w-8 h-8 text-[#fec857]" /> */}
              {/* <div className="text-xl font-bold text-[#fec857]">የኔ ቡና</div> */}
            </div>

            {/* Navigation */}
            {/* <nav className="hidden md:flex items-center gap-8">
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
            </nav> */}

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
    </motion.div>
  );
};

export default Header;
