import React from "react";
import { Coffee, CheckCircle } from "lucide-react";
import * as motion from "motion/react-client";

const PopupModal = ({ firstName, email }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
      }}
      className="border shadow-lg bg-[#f2e2c7] border-[#5f4137] rounded-lg"
    >
      <div className="p-8 text-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 mx-auto mb-4 bg-[#126634] rounded-full flex items-center justify-center">
            <Coffee className="w-10 h-10 text-[#fec857]" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#fec857] rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-[#126634]" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-[#126634]">
            Thank You, {firstName}!
          </h3>
          <p className="text-lg font-medium text-[#5f4137]">
            Welcome to the Buna family!
          </p>
        </div>

        <div className="bg-[#126634] rounded-lg p-4 text-[#f2e2c7] space-y-2">
          <p className="font-medium">☕ Your coffee journey begins soon!</p>
          <p className="text-sm opacity-90">
            We're brewing something special just for you. You'll be the first to
            know when our premium coffee experience launches.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-[#5f4137] font-medium">
            📧 We'll notify you at:{" "}
            <span className="text-[#126634]">{email}</span>
          </p>
          <p className="text-xs text-[#5f4137] opacity-80">
            In the meantime, follow us on social media for behind-the-scenes
            updates and coffee tips!
          </p>
        </div>

        <div className="pt-4 border-t border-[#5f4137]/20">
          <p className="text-sm font-medium text-[#126634]">
            🌟 Expected Launch: 2025
          </p>
          <p className="text-xs text-[#5f4137] mt-1">
            Get ready for an authentic Ethiopian coffee experience like no
            other.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PopupModal;
