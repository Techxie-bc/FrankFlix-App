import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div>
        <div className="text-gray-500  flex justify-between py-6 px-8 mt-5 cursor-pointer">
          <div>
            <ul>
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Upcoming
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Popular
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Trending
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="hover:text-white">Terms & Conditions</li>
              <li className="hover:text-white">Support</li>
              <li className="hover:text-white">For Developers</li>
              <li className="hover:text-white">Join Our Team</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="hover:text-white">
                <BsFacebook className="mb-4 h-30 w-30" />
              </li>
              <li className="hover:text-white">
                <BsTwitter className="mb-4 h-30 w-30" />
              </li>
              <li className="hover:text-white">
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 p-8">
          <span className="text-red-600 font-bold text-center">Flix</span>{" "}
          &copy; 2022 Irene C. Onyia
        </p>
      </div>
    </>
  );
};

export default Footer;
