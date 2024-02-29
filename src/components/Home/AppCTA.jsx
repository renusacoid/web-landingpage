import Image from "next/image";
import React from "react";

const AppCTA = () => {
  return (
    <section className="relative pt-16 pb-40">
      <div className="absolute top-0 left-[25%] -z-50">
        <img src="assets/get_app_circle1.svg" alt="" width="300" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-24 -z-50">
        <img src="assets/get_app_circle1.svg" alt="" width="300" />
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <img className="md:pl-32" src="/assets/apps_wisnu.png" alt="" />
          {/* <Image
            className="bg-red-500"
            src="/assets/apps_wisnu.png"
            alt=""
            width={700}
            height={700}
          /> */}
        </div>
        <div className="w-full lg:w-1/2 pl-4 lg:pl-0">
          <div
            className="ml-auto pl-16 py-20 rounded-l-[110px] md:ml-16"
            style={{
              background: "rgba(255, 255, 255, 0.22)",
              boxShadow: "0px -1px 13.2px 0px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(139.35000610351562px)",
              border: "1px solid #dc602a",
              borderRight: "none",
            }}
          >
            <h1 className="font-extrabold text-6xl mb-8 montserrat md:leading-tight">
              Say Hello to <br />
              <span className="text-[#DC602A] montserrat">Wisnu.</span>
            </h1>
            <p className="text-xl">
              Wisnu offers
              <span className="text-[#DC602A] font-bold">
                {" "}
                more immersive
              </span>{" "}
              <br />
              travel experiences by downloading our app.
            </p>
            <a href="#footer">
              <button className="bg-[#DC602A] border-2 border-[#FFAE8B] rounded-[30px] flex text-white py-2 px-4 items-center gap-x-2 mt-16 ml-8">
                <div>
                  <img src="assets/icon_arrow_left.svg" alt="" />
                </div>
                <div className="montserrat">Get App</div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 -z-40">
        <img src="assets/get_app_circle3.svg" alt="" width="300" />
      </div>
    </section>
  );
};

export default AppCTA;
