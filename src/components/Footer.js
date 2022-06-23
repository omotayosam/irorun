import React from "react";
import Logo from "../images/Group.png";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between mt-10 pl-10 pr-10 ml-52 mr-52">
        <div>
          <a href=".">
            <img className="h-9 w-17" src={Logo} alt="{logo}" />
          </a>
        </div>

        <div className="address leading-8">
          <p>office</p>
          <p className="break-before-all w-24">
            4 Perez Drive, Lekki Phase 1, Lagos
          </p>
        </div>

        <div className="leading-8">
          <p>Contact</p>
          <p>hello@irorun.com</p>
          <p>+234 809 666 8877</p>
        </div>

        <div className="leading-8">
          <p className=" w-52 break-before-all">
            Powered by YesCredit Limited. licensed as a Monel Lender by the
            Lagos State Government of Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
