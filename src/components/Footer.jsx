import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto pt-8 text-sm text-[#126634] opacity-80 w-full flex flex-col items-center">
      <p>© 2025 My Buna Coffee. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="#"
          className="text-[#126634] hover:opacity-100 transition-opacity"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-[#126634] hover:opacity-100 transition-opacity"
        >
          Terms of Service
        </a>
      </div>
    </div>
  );
};

export default Footer;
