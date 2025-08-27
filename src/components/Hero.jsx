import { Clock, Mail } from "lucide-react";
import * as motion from "motion/react-client";
import { FaHandPointRight } from "react-icons/fa";

const Hero = ({ setShowForm }) => {
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
    <div
      className={`min-h-screen relative overflow-hidden flex items-center justify-center p-4 pt-20 `}
      // className={`${
      //   showForm && "min-h-screen"
      // }min-h-screen relative overflow-hidden flex items-center justify-center p-4 pt-20`}
    >
      {/* Hero Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
          }}
          className="max-w-2xl mx-auto text-center space-y-8 relative z-10"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#fec857] text-black text-xs ">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>

            {/* <div className="space-y-2">
              <div
                className="text-6xl md:text-7xl font-bold tracking-wider text-[#fec857]"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                የኔ ቡና
              </div>
              <div className="text-lg font-medium text-[#f2e2c7] opacity-80">
                My Coffee • Your Experience
              </div>
            </div> */}

            <h1 className="text-2xl font-bold leading-tight text-[#f2e2c7]">
              Something Amazing
              <br />
              <span className="text-[#fec857]">Is Brewing</span>
            </h1>

            <p className="text-sm max-w-lg mx-auto leading-relaxed text-[#f2e2c7] opacity-90">
              We're crafting an incredible coffee experience that will transform
              your daily ritual. Be the first to know when we launch.
            </p>
          </div>

          {/* CTA Button */}
          <div className="relative flex items-center">
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              // className="hidden md:block"
              className="absolute left-0 pointer"
            >
              <FaHandPointRight
                className="text-[#fec857] w-6 h-6 "
                aria-hidden="true"
              />
            </motion.div>
            <button
              onClick={handleKeepMeUpdated}
              className="flex items-center mx-auto text-sm font-medium px-3 py-2 md:px-8 cursor-pointer rounded-lg bg-[#fec857] text-black hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5 mr-2" />
              Keep Me Updated
            </button>
          </div>

          {/* Footer */}
          <div className="pt-8 text-xs md:text-sm text-[#f2e2c7] opacity-80">
            <p>© 2025 My Buna Coffee. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2 ">
              <a
                href="#"
                className="text-[#fec857] hover:opacity-100 transition-opacity "
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#fec857] hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
