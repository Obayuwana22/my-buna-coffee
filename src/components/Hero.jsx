import React from "react";
import { Clock, Mail } from "lucide-react";

const Hero = () => {
  const handleKeepMeUpdated = () => {
    const formSection = document.getElementById("signup-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-[#5f4137]"></div>
          <div className="absolute top-20 left-32 w-2 h-2 rounded-full bg-black"></div>
          <div className="absolute top-32 left-16 w-4 h-4 rounded-full bg-[#5f4137]"></div>
          <div className="absolute top-40 left-64 w-3 h-3 rounded-full bg-black"></div>
          <div className="absolute top-16 right-20 w-2 h-2 rounded-full bg-[#5f4137]"></div>
          <div className="absolute top-48 right-40 w-3 h-3 rounded-full bg-black"></div>
          <div className="absolute top-64 right-16 w-4 h-4 rounded-full bg-[#5f4137]"></div>
          <div className="absolute bottom-20 left-24 w-3 h-3 rounded-full bg-black"></div>
          <div className="absolute bottom-40 left-48 w-2 h-2 rounded-full bg-[#5f4137]"></div>
          <div className="absolute bottom-32 right-32 w-3 h-3 rounded-full bg-black"></div>
          <div className="absolute bottom-16 right-64 w-4 h-4 rounded-full bg-[#5f4137]"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium bg-[#fec857] text-black">
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

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#f2e2c7]">
              Something Amazing
              <br />
              <span className="text-[#fec857]">Is Brewing</span>
            </h1>

            <p className="text-xl max-w-lg mx-auto leading-relaxed text-[#f2e2c7] opacity-90">
              We're crafting an incredible coffee experience that will transform
              your daily ritual. Be the first to know when we launch.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleKeepMeUpdated}
            size="lg"
            className="flex items-center mx-auto text-lg font-medium px-8 py-3 cursor-pointer rounded-lg bg-[#fec857] text-black hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5 mr-2" />
            Keep Me Updated
          </button>

          {/* Footer */}
          <div className="pt-8 text-sm text-[#f2e2c7] opacity-80">
            <p>© 2025 My Buna Coffee. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="#"
                className="text-[#fec857] hover:opacity-100 transition-opacity"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
