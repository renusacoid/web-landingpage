import React from "react";

const TentangWisnu = () => {
  return (
    <section
      className="flex bg-[#F9F9F9] relative overflow-hidden"
      id="tentangwisnu"
    >
      <div className="max-w-xs hidden lg:block absolute top-0 left-0">
        <img src="assets/wisnu_half.png" style={{ objectFit: "cover" }} />
      </div>
      {/* <div className="hidden lg:block lg:max-w-xs lg:bg-cover lg:bg-no-repeat">
        <img src="assets/wisnu_half.png" />
      </div> */}
      <div className="container mx-auto lg:flex lg:flex-row items-center px-4 md:px-32 py-24 md:py-36">
        <div className="lg:basis-1/4"></div>
        <div className="lg:basis-3/4 lg:ml-6">
          <div className="text-center lg:text-right">
            <h1 className="font-bold text-6xl mb-8 md:mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block">
              Tentang Wisnu
            </h1>
          </div>
          <p className="text-lg text-justify pb-8 md:pb-14 montserrat">
            <b className="montserrat">Wisata Nusantara</b> atau{" "}
            <b className="montserrat">Wisnu</b> merupakan sebuah platform
            aplikasi yang tidak hanya menawarkan wawasan nusantara dan latar
            belakang destinasi yang mereka kunjungi, tetapi juga Wisnu
            memberikan rekomendasi rencana perjalanan sesuai preferensi
            wisatawan. Kami percaya dengan mempromosikan pariwisata dan
            memberikan pengalaman yang lebih mendalam, kami dapat membantu para
            wisatawan menemukan destinasi yang baru dan seru, juga menciptakan
            dampak positif pada lingkungan dan komunitas lokal. Wisnu memiliki
            penekanan yang lebih kuat dengan mempromosikan destinasi wisata yang
            kurang diketahui oleh wisatawan di Indonesia, menyediakan
            rekomendasi untuk beberapa destinasi yang saling berdekatan,
            sehingga dapat dengan dekat ditempuh, dan menghubungkan wisatawan
            dengan pemandu lokal. Hal ini dapat menjadi nilai yang unik untuk
            pengguna dalam mencari pengalaman perjalanan yang beda dan otentik.
          </p>
          <a href="#footer">
            <button className="montserrat border-[3px] border-[#DC602A] rounded-[20px] self-start px-5 sm:px-[1.5rem] md:px-[2.5rem] lg:px-[3.5rem] xl:px-[4.375rem] py-2 text-base md:text-lg xl:text-[1.625rem] font-semibold">
              Download the Apps
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TentangWisnu;
