import React from "react";

const TentangWisnu = () => {
  return (
    <section className="flex bg-[#F9F9F9]">
      <div className="max-w-xs hidden lg:block">
        <img src="assets/wisnu_half.png" />
      </div>
      <div className="flex flex-col items-center md:items-end p-5 xl:px-32 xl:py-24">
        <h1 className="font-bold text-center text-5xl md:text-6xl mb-8 md:mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block pb-3">
          Tentang Wisnu
        </h1>
        <p className="text-lg max-w-4xl text-justify pb-14">
          <b>Wisata Nusantara</b> atau <b>Wisnu</b> merupakan sebuah platform
          aplikasi yang tidak hanya menawarkan wawasan nusantara dan latar
          belakang destinasi yang mereka kunjungi, tetapi juga Wisnu memberikan
          rekomendasi rencana perjalanan sesuai preferensi wisatawan. Kami
          percaya dengan mempromosikan pariwisata dan memberikan pengalaman yang
          lebih mendalam, kami dapat membantu para wisatawan menemukan destinasi
          yang baru dan seru, juga menciptakan dampak positif pada lingkungan
          dan komunitas lokal. Wisnu memiliki penekanan yang lebih kuat dengan
          mempromosikan destinasi wisata yang kurang diketahui oleh wisatawan di
          Indonesia, menyediakan rekomendasi untuk beberapa destinasi yang
          saling berdekatan, sehingga dapat dengan dekat ditempuh, dan
          menghubungkan wisatawan dengan pemandu lokal. Hal ini dapat menjadi
          nilai yang unik untuk pengguna dalam mencari pengalaman perjalanan
          yang beda dan otentik.
        </p>
        <button className="border-[3px] border-[#DC602A] rounded-[20px] self-start px-5 sm:px-[1.5rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[4.375rem] py-2 text-base md:text-lg xl:text-[1.625rem] font-medium">
          Download the Apps
        </button>
      </div>
    </section>
  );
};

export default TentangWisnu;
