import React from "react";
import Gplay from "../images/gplay.png";
import AppStore from "../images/apstore.png";

const StoreLink = () => {
  return (
    <div className="mt-8">
      <div className="bg-emerald w-auto h-auto flex flex-col items-center pb-24">
        <div className=" w-80">
          <p className=" text-center text-white font-normal text-lg mt-6 break-before-all">
            {" "}
            Get it on playstore and download on the appstore
          </p>
        </div>

        <div className="appstores flex mt-8 space-x-3">
          <a href=".">
            <img src={Gplay} alt="{Gplay}" />
          </a>
          <a href=".">
            <img src={AppStore} alt="{AppStore}" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreLink;
