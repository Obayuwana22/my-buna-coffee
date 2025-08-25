import React from "react";
import { FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
// />

const Socials = () => {
  const contacts = [
    { icon: FaPhone, link: "tel:+2347048820000" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/mybunacoffee?utm_source=qr&igsh=MXJqbmZ4cmxjcW1kMA==",
    },
    {
      icon: FaFacebookF,
      link: "https://facebook.com/mybunacoffee",
    },
    {
      icon: FaXTwitter,
      link: "https://x.com/mybunacoffee?s=08",
    },
  ];
  return (
    <div className="flex justify-center gap-6 py-6">
      {contacts.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <a
            key={index}
            href={contact.link}
            target={contact.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            aria-label={contact.label}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#126634]  shadow-md hover:bg-[#0e4e28] transition-colors duration-300 md:w-12 md:h-12"
          >
            <Icon className="text-[#fec857] md:w-5 md:h-5" />
          </a>
        );
      })}
    </div>
    // <div class="flex items-center justify-center gap-6 py-5">
    //   {/* <!-- Phone --> */}
    //   <a
    //     href="tel:+2347048820000"
    //     class="w-12 h-12 flex items-center justify-center rounded-full bg-[#126634] shadow-md hover:bg-gray-200 transition-colors duration-300"
    //   >
    //     <i class="fa-solid fa-phone text-blue-500 text-xl"></i>
    //     <FaPhone className="text-[#fec857]" />
    //   </a>

    //   {/* <!-- Instagram --> */}
    //   <a
    //     href="https://www.instagram.com/mybunacoffee?utm_source=qr&igsh=MXJqbmZ4cmxjcW1kMA=="
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     class="w-12 h-12 flex items-center justify-center rounded-full bg-[#126634] shadow-md hover:bg-gray-200 transition-colors duration-300"
    //   >
    //     <i class="fa-brands fa-instagram text-pink-500 text-xl"></i>
    //     <FaInstagram className="text-[#fec857]" />
    //   </a>

    //   {/* <!-- Facebook --> */}
    //   <a
    //     href="https://facebook.com/mybunacoffee"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     class="w-12 h-12 flex items-center justify-center rounded-full bg-[#126634] shadow-md hover:bg-gray-200 transition-colors duration-300"
    //   >
    //     <i class="fa-brands fa-facebook text-blue-600 text-xl"></i>
    //     <FaFacebookF className="text-[#fec857]" />
    //   </a>

    //   {/* <!-- X / Twitter --> */}
    //   <a
    //     href="https://x.com/mybunacoffee?s=08"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     class="w-12 h-12 flex items-center justify-center rounded-full bg-[#126634] shadow-md hover:bg-gray-200 transition-colors duration-300"
    //   >
    //     <i class="fa-brands fa-x-twitter text-black text-xl"></i>
    //     <FaXTwitter className="text-[#fec857]" />
    //   </a>
    // </div>
  );
};

export default Socials;
