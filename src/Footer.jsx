import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black w-full flex flex-col h-[10ex] items-center justify-center text-[calc(8px_+_2vmin)] text-white fixed bottom-[0%]">
      <div className="fixed left-[0.5cm]">
        <Link to="/about">About Deakin</Link>
      </div>

      <div>
        <Link to="/connect">Connect with us</Link>
      </div>

      <div className="fixed right-[0.5cm] flex">
        <a
          href="https://www.facebook.com/DeakinUniversity"
          aria-label="Facebook"
        >
          <FaFacebook className="p-[0.2cm]" />
        </a>
        <a
          href="https://www.instagram.com/deakinuniversity/"
          aria-label="Instagram"
        >
          <FaInstagram className="p-[0.2cm]" />
        </a>
        <a href="https://twitter.com/deakin" aria-label="Twitter">
          <FaTwitter className="p-[0.2cm]" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
