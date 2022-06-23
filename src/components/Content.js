import React from "react";
import Phone from "../images/phone.png";
import Cash from "../images/cash.png";
import Form from "../images/apply.png";
const Content = () => {
  return (
    <div className="items-center mt-16">
      <p className=" text-5xl text-black text-center font-medium">
        How it works
      </p>

      <div className="cards mt-12">
        <div className="flex justify-center space-x-4">
          <figure className="bg-slate-100 p-8 dark:bg-slate-800 w-60 p-2 bg-white rounded-xl shadow-lg">
            <img className=" w-12 h-14 mx-auto" src={Phone} alt="{Phone}" />
            <div className="pt-6 text-center space-y-4">
              <blockquote className="mt-7 pb-12">
                <p className="text-lg font-medium">Set up an account</p>
                <p className=" mt-7">
                  {" "}
                  Download the app for free, sign up and verify your account
                </p>
              </blockquote>
            </div>
          </figure>

          <figure className="bg-slate-100 p-8 dark:bg-slate-800 w-60 p-2 bg-white rounded-xl shadow-lg">
            <img className=" w-12 h-14 mx-auto" src={Form} alt="{Form}" />
            <div className="pt-6 text-center space-y-4">
              <blockquote className="mt-7 pb-12">
                <p className="text-lg font-medium">Set up an account</p>
                <p className=" mt-7">
                  {" "}
                  Download the app for free, sign up and verify your account
                </p>
              </blockquote>
            </div>
          </figure>

          <figure className="bg-slate-100 p-8 dark:bg-slate-800 w-60 p-2 bg-white rounded-xl shadow-lg">
            <img className=" w-12 h-14 mx-auto" src={Cash} alt="{Cash}" />
            <div className="pt-6 text-center space-y-4">
              <blockquote className="mt-7 pb-12">
                <p className="text-lg font-medium">Set up an account</p>
                <p className="mt-7">
                  {" "}
                  Download the app for free, sign up and verify your account
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Content;
