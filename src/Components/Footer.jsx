import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black py-8 mt-24">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">📚 Book Vibe</h2>
            <p className="mt-3 text-sm leading-6">
              Discover, read, and manage your favorite books. Build your own
              reading journey with Book Vibe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="/books" className="">
                  Books
                </a>
              </li>
              <li>
                <a href="/wishlist" className="">
                  Wish List
                </a>
              </li>
              <li>
                <a href="/readlist" className="">
                  Read List
                </a>
              </li>
              <li>
                <a href="/about" className="">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className=" text-xl">
                {/* <FaFacebook /> */}
              </a>
              <a href="#" className=" text-xl">
                {/* <FaTwitter /> */}
              </a>
              <a href="#" className=" text-xl">
                {/* <FaInstagram /> */}
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className=" text-xl"
              >
                {/* <FaGithub /> */}
              </a>
            </div>
            <p className="mt-3 text-sm">📩 support@bookvibe.com</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Book Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
