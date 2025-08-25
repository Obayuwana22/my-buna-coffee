import React, { useRef } from "react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import pattern from "../assets/svg/Pattern Black.svg";
import Footer from "./Footer";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import PopupModal from "./PopupModal";

const Form = ({ showForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const isDisabled = !(
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    isValidEmail
  );

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && firstName.trim() && lastName.trim()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("Form submitted:", { firstName, lastName, email });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 1,
      }}
    >
      {showForm && (
        <div
          id="signup-form"
          className="min-h-screen flex flex-col items-center p-4 relative bg-[#fec857]"
        >
          <div
            className="opacity-5 absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundSize: "500px",
            }}
          ></div>
          <div className="absolute inset-0 opacity-5">
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

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1,
            }}
            className="flex-1 flex items-center justify-center w-full"
          >
            <div className="mx-auto relative z-10 w-full md:max-w-lg">
              {!isSubmitted ? (
                <div className="border shadow-lg bg-[#f2e2c7] border-[#5f4137] rounded-xl">
                  <div className="px-8 py-14">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold mb-2 text-[#126634]">
                        Get Early Access
                      </h2>
                      <p className="text-sm text-[#5f4137] max-w-sm mx-auto">
                        Join our exclusive list and be among the first to
                        experience our launch.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex flex-col gap-4 md:flex-row">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="border bg-white border-[#5f4137] focus:outline-4 focus:outline-[#c7ada4] focus:border-none  text-black rounded-md px-3 py-1 flex-1"
                          required
                        />

                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="border bg-white border-[#5f4137] focus:outline-4 focus:outline-[#c7ada4] focus:border-none text-black rounded-md px-3 py-1 flex-1"
                          required
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={handleEmailChange}
                          className="w-full pr-10 border bg-white border-[#5f4137]  focus:outline-4 focus:outline-[#c7ada4] focus:border-none  text-black rounded-lg px-3 py-1"
                          required
                        />
                        {isValidEmail && (
                          <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isDisabled}
                        className={`${
                          isDisabled ? "opacity-50" : "opacity-100"
                        } w-full text-[#f2e2c7] bg-[#126634] font-medium rounded-md py-1 cursor-pointer hover:opacity-90 transition-opacity`}
                      >
                        Get Notified
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <PopupModal firstName={firstName} email={email} />
                // <div className="border shadow-lg bg-[#f2e2c7] border-[#5f4137] rounded-sm">
                //   <div className="p-8 text-center">
                //     <CheckCircle className="w-16 h-16 mx-auto mb-4 text-[#126634]" />
                //     <h3 className="text-2xl font-bold mb-2 text-[#126634]">
                //       Welcome, {firstName}!
                //     </h3>
                //     <p className="text-sm text-[#5f4137]">
                //       Thanks for joining our waitlist. We'll notify you at {email}{" "}
                //       as soon as we launch.
                //     </p>
                //   </div>
                // </div>
              )}
            </div>
          </motion.div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Form;
