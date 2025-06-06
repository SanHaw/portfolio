import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



const Contact: React.FC = () => {
  return (
    <div className="min-h-screen sm:w-full flex pt-0 p-8 text-stone-800 justify-center overflow-x-hidden">
      <div className="xl:w-[70%] lg:w-[90%] md:w-full sm:w-full flex flex-col justify-center items-center pt-0 p-8 mt-24">

        {/* Decorative Top Grid */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-4 col-span-3 flex">
            <div className="w-full rounded-lg bg-[#E8D0FF] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-transparent aspect-square text-center flex items-end justify-center overflow-hidden">
              <img src="/asterisk.svg" alt="Asterisk" className="w-max h-max object-contain" />
            </div>
          </div>
          
          <div className="col-start-4 col-span-1 flex">
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                    flex items-center justify-center overflow-hidden"></div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-1 col-span-3 flex">
            <div className="flex items-center justify-start">
              <span>
                <p className="font-[Nowcloud] text-4xl 2xl:text-[8rem] lg:text-6xl 2xs:text:xl">Find Me Here</p>
              </span>
            </div>
          </div>

          <div className="col-start-4 col-span-3 flex font-[Instrument] text-3xl 2xl:4xl">
            <div className="flex justify-start flex-col gap-8 mt-6 items-start text-left">
              <a
                href="mailto:itssarahhaw@gmail.com"
                className="flex items-center gap-4 hover:text-[#A3CED6] transition"
              >
                <FaEnvelope className="text-2xl" />
                <span>itssarahhaw@gmail.com</span>
              </a>



                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-[#A3CED6] transition"
                  >
                    <FaGithub />
                    <span className=" ">GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-[#A3CED6] transition"
                  >
                    <FaLinkedin />
                    <span className=" ">LinkedIn</span>
                  </a>

                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-[#A3CED6] transition"
                  >
                    <FaInstagram />
                    <span className=" ">Instagram</span>
                  </a>

                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-[#A3CED6] transition"
                  >
                    <FaTwitter />
                    <span className=" ">Twitter</span>
                  </a>
            </div> 
          </div>

          <div className="col-start-4 col-span-1 flex">
            <div className="w-full rounded-lg bg-[transparent aspect-square text-center
                    flex items-center justify-center overflow-hidden">
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------- */}

        {/* Decorative Middle Grid */}
        <div className="grid grid-cols-6 gap-0 w-full">
          <div className="col-start-1 col-span-6 flex">
            <div className="w-full rounded-lg bg-transparent aspect-square text-center flex items-center justify-center overflow-hidden"></div>
            <div className="w-full rounded-lg bg-transparent aspect-square text-center flex items-center justify-center overflow-hidden"></div>
            <div className="w-full rounded-lg bg-[#A3CED6] aspect-square"></div>
            <div className="w-full rounded-lg bg-[#FFEB81] aspect-square"></div>
            <div className="w-full rounded-lg bg-transparent aspect-square text-center flex items-center justify-center overflow-hidden">
              <img src="/asterisk2.svg" alt="Asterisk" className="w-max h-max object-contain" />
            </div>
            <div className="w-full rounded-lg h-full bg-transparent aspect-square text-center flex items-center justify-center overflow-hidden">
              <img src="/smiski4.png" alt="Smiski" className="h-full object-contain" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
