import Image from "next/image";
import React from "react";

const TopTrip = () => {
  const images = [
    "/assets/destinations/tempat_nongkrong.png",
    "/assets/destinations/hutan.png",
    "/assets/destinations/gunung.png",
    "/assets/destinations/villa.png",
    "/assets/destinations/hotel.png",
  ];

  const icons = [
    "/assets/destinations/icon_tempatnongkrong.svg",
    "/assets/destinations/icon_hutan.svg",
    "/assets/destinations/icon_gunung.svg",
    "/assets/destinations/icon_villa.svg",
    "/assets/destinations/icon_hotel.svg",
  ];

  const titles = ["Tempat Nongkrong", "Hutan", "Gunung", "Villa", "Hotel"];
  return (
    <section className="relative overflow-x-auto">
      <div className="hidden md:block absolute right-0 top-[30%] -z-50">
        <img src="assets/trip_circle.svg" alt="" width="350" />
      </div>
      <div>
        <h1 className="font-bold text-6xl mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block pb-3 pl-3 md:pl-40 pt-[15vh] md:pt-[50vh]">
          “Our Top Trip <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category”
        </h1>
      </div>
      <div className="flex overflow-x-auto" id="style-3">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="flex md:mr-6">
            <div
              className="min-w-[20rem] h-96 bg-cover bg-center"
              style={{ backgroundImage: `url('${images[index]}')` }}
            >
              <div className="flex items-end pb-8 h-full">
                <div
                  className="text-center text-xl text-white w-full mx-8 py-2 rounded-[36px]"
                  style={{
                    background:
                      "linear-gradient(97.29deg, #dc602a 34.16%, #05a8aa 208.27%)",
                  }}
                >
                  <div className="flex items-center justify-center gap-x-4">
                    <Image
                      src={icons[index]}
                      layout="respoinsive"
                      height={35}
                      width={35}
                    />
                    <h1>{titles[index]}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTrip;
