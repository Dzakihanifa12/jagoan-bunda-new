import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const profile_url = "http://localhost:8000/api/profile/";

interface Idata {
  id: number;
  name: string;
  logo: string;
  about_us: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

const Footer = async () => {
  const res = await fetch(profile_url);
  const data: Idata[] = await res.json();
  return (
    <>
      {data.map((profile) => (
        <div key={profile.id} id='contact' className="w-full bg-gray-100 shadow-xl py-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href={profile.instagram} className="text-3xl text-gray-500 hover:text-blue-500">
                <FaInstagram />
              </a>
              <a href={profile.facebook} className="text-3xl text-gray-500 hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href={profile.twitter} className="text-3xl text-gray-500 hover:text-blue-500">
                <FaTwitter />
              </a>
            </div>
            {/* Copyright */}
            <div className="text-center text-gray-500 mt-4">
              © {new Date().getFullYear()} All rights reserved || Made with{" "}
              <span role="img" aria-label="Oke">
                👌
              </span>{" "}
              by Dzaki n Iqbal
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;
