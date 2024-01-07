import Image from "next/image";
import React from "react";

const DefinisiLogo = () => {
  return (
    <section className="pt-[15vh] md:pt-[35vh] flex items-center justify-center relative">
      <div className="translate-y-8 hidden md:block">
        <img src="assets/logo_big.svg" width="500" />
      </div>
      <div className="flex flex-col items-center md:items-end px-4 md:px-32">
        <div>
          <h1 className="font-bold text-6xl mb-4 md:mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block pb-3">
            Definisi Logo
          </h1>
        </div>
        <div>
          <div className="flex justify-center md:hidden">
            <Image src="assets/logo_big.svg" width={300} height={300} />
          </div>
          <p className="text-lg max-w-2xl text-justify pb-14">
            <span className="text-[#DC602A] font-medium">Logo Wisnu </span>
            terinspirasi oleh gambaran kompas, yang melambangkan peran Wisnu
            dalam membimbing para wisatawan untuk menemukan tujuan liburan
            terbaik mereka. Warna Oranye cerah mendominasi Wisnu dengan makna
            <span className="text-[#DC602A] font-medium"> "Full of Life"</span>.
            Makna ini menggambarkan semangat, kegembiraan, dan keceriaan dalam
            pengalaman liburan yang kami tawarkan. Logo ini mencerminkan
            komitmen kami untuk memberikan pengalaman liburan yang memenuhi
            kehidupan dengan kenangan yang penuh semangat dan kebahagiaan kepada
            setiap pengguna. Ini adalah simbol dari energi dan kegairahan dalam
            menjalani petualangan wisata, serta harapan kami agar setiap
            pelanggan merasa hidup dan bersemangat selama perjalanan mereka
            bersama kami.
          </p>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 translate-y-[55vh]">
        <img src="assets/circle_vm_reverse.svg" width="300" />
      </div>
    </section>
  );
};

export default DefinisiLogo;
