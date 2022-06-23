import React from "react";
import HeroImg from "../images/Hero.png";
import Gplay from "../images/gplay.png";
import AppStore from "../images/apstore.png";
import HeroImg2 from "../images/Hero2.png";

const Hero = () => {
  return (
    <div className="px-7 mx-auto">
      <div className="hero flex justify-between">
        <div className=" flex items-start justify-center">
          {/* left contact us start */}
          <div className="rotate-90 -ml-16 mt-16 bg-emerald">
            <a
              href="."
              className="py-2 px-6 bg-tmpl rounded-br rounded-tr text-xs"
            >
              Contact Us
            </a>
          </div>
          {/* left contact us end */}
          <div className="content ml-52 mt-40 w-auto">
            <div className=" py-1 text-center">
              <h2 className="font-medium text-5xl break-before-all w-3/4 text-left">
                Get Instant Loans
              </h2>
              <h3 className=" mt-5 font-light text-2xl break-before-all w-3/4 text-left">
                Get instant loans with ease on your smartphone.
              </h3>
              <div className="flex mt-8 items-center space-x-3">
                <a href=".">
                  <img src={Gplay} alt="{Gplay}" />
                </a>
                <a href=".">
                  <img src={AppStore} alt="{AppStore}" className=" space-x-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pic mr-14">
          <img className=" w-96" src={HeroImg} alt="{HeroImg}" />
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <div>
          <img src={HeroImg2} alt="{HeroImg2}" className="w-96" />
        </div>

        <div className="ml-52 mt-14 w-auto">
          <div className=" py-1 text-center">
            <h2 className="font-medium text-5xl break-before-all w-3/4 text-left">
              save on your own terms
            </h2>
            <h3 className=" mt-5 font-light text-2xl break-before-all w-3/4 text-left">
              Savings gives you financial options
            </h3>
            <div className="flex mt-8 items-center space-x-3">
              <a href=".">
                <img src={Gplay} alt="{Gplay}" />
              </a>
              <a href=".">
                <img src={AppStore} alt="{AppStore}" className=" space-x-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
