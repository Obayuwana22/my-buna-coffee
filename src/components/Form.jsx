import React, { useRef } from "react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import pattern from "../assets/svg/Pattern Black.svg";
import Footer from "./Footer";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import PopupModal from "./PopupModal";
import Spinner from "./Spinner";

const Form = ({ showForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

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
    setLoading(true);
    e.preventDefault();
    if (isValidEmail && firstName.trim() && lastName.trim()) {
      fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber: phoneNumber || "not provided",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.message) {
            console.log("Message sent successfully!");
            setIsSubmitted(true);
            setSubmittedData({ firstName, email });
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
          } else {
            console.log("Something went wrong. Please try again later.");
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log("Something went wrong. Please try again later:", error);
        });
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
                      <p className="text-sm text-[#5f4137] max-w-[430px] mx-auto">
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
                          className="border bg-white border-[#5f4137] focus:outline-4 focus:outline-[#c7ada4] focus:border-none  text-black rounded-md px-3 py-2 flex-1 text-sm"
                          required
                        />

                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="border bg-white border-[#5f4137] focus:outline-4 focus:outline-[#c7ada4] focus:border-none text-black rounded-md px-3 py-2 flex-1 text-sm"
                          required
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={handleEmailChange}
                          className="w-full pr-10 border bg-white border-[#5f4137]  focus:outline-4 focus:outline-[#c7ada4] focus:border-none  text-black rounded-lg px-3 py-2 text-sm"
                          required
                        />
                        {isValidEmail && (
                          <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
                        )}
                      </div>

                      <div>
                        <div className="text-[10px] mb-2 text-[#5f4137]">
                          (Optional)
                        </div>
                        <input
                          type="tel"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                          inputMode="numeric"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full border bg-white border-[#5f4137] focus:outline-4 focus:outline-[#c7ada4] focus:border-none  text-black rounded-md px-3 py-2 flex-1 text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isDisabled}
                        className={`${
                          isDisabled
                            ? "opacity-50 cursor-not-allowed"
                            : "opacity-100 cursor-pointer "
                        } w-full text-[#f2e2c7] bg-[#126634] font-medium rounded-md py-1 transition-opacity`}
                      >
                        {loading ? <Spinner /> : "Get Notified"}
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <PopupModal
                  firstName={submittedData?.firstName}
                  email={submittedData?.email}
                />
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
