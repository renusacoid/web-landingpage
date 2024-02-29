import Image from 'next/image';
import React from 'react';

const AppShowcase = () => {
  return (
    <section className="relative py-32 md:py-[50vh]">
      <div className="hidden md:block absolute -z-50 -translate-y-52">
        <img src="assets/showcase_circle.svg" alt="" width="300" />
      </div>
      <div className="container mx-auto px-4 md:px-32 py-20">
        <div className="pb-[20vh]">
          <div className="flex flex-col-reverse lg:flex-row gap-x-24">
            <div>
              <Image
                src="/assets/showcase1.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="text-center lg:text-left py-3 lg:py-0">
              <h1 className="montserrat font-extrabold text-6xl md:leading-snug">
                Kenalin, <br />
                <span className="montserrat text-[#DC602A]">Wisnu.</span>
              </h1>
              <p className="montserrat font-semibold text-3xl mt-4">
                Yang akan menemani jalan-jalan kamu.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-x-24 pt-12">
            <div className="text-center lg:text-end py-3 lg:py-0">
              <h1 className="montserrat font-extrabold text-6xl md:leading-snug">
                Cari destinasi <br />
                <span className="montserrat text-[#DC602A]">liburan</span>
              </h1>
              <p className="montserrat font-semibold text-3xl mt-4">
                mau kemana liburan selanjutnya? Cari di Wisnu aja!
              </p>
            </div>
            <div>
              <Image
                src="/assets/showcase1_2.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="pb-[20vh]">
          <div className="flex flex-col lg:flex-row gap-x-24">
            <div>
              <Image
                src="/assets/showcase2.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="text-center lg:text-left py-3 lg:py-0">
              <h1 className="montserrat font-extrabold text-6xl md:leading-snug">
                Eksplor destinasi yang
                <span className="montserrat text-[#DC602A]"> baru</span>
              </h1>
              <p className="montserrat font-semibold text-3xl mt-4">
                Jelajahi beragam kategori destinasi di Wisnu
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-x-24 pt-12">
            <div className="text-center lg:text-end py-3 lg:py-0">
              <h1 className="montserrat font-extrabold text-6xl md:leading-snug">
                Atur
                <span className="montserrat text-[#DC602A]"> trip</span>
                <br />
                kamu
              </h1>
              <p className="montserrat font-semibold text-3xl mt-4">
                Mulai dari destinasi, durasi, berapa budgetnya di Wisnu
              </p>
            </div>
            <div>
              <Image
                src="/assets/showcase2_2.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-24">
          <div>
            <Image
              src="/assets/showcase3.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left py-3 lg:py-0">
            <h1 className="montserrat font-extrabold text-6xl md:leading-snug">
              Bagikan
              <span className="montserrat text-[#DC602A]"> trip</span>
              <br />
              kamu
            </h1>
            <p className="montserrat font-semibold text-3xl mt-4">
              Ajak teman, keluarga, atau orang lain untuk liburan bareng!
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-0 -z-50 translate-y-20">
        <img src="assets/showcase_circle.svg" alt="" width="300" />
      </div>
    </section>
  );
};

export default AppShowcase;
