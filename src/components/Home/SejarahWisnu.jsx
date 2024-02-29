import Image from 'next/image';
import React from 'react';

const SejarahWisnu = () => {
  return (
    <section className="py-[5vh] my:pt-[30vh] relative">
      <div className="container mx-auto px-4 md:px-32 py-24 md:py-36">
        <div className="text-center lg:text-left ">
          <h1 className="font-bold text-6xl mb-8 md:mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block">
            Sejarah Wisnu
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-14 items-center content-center">
          <div className="lg:col-span-2 lg:justify-self-end">
            <p className="montserrat text-justify text-lg">
              Kisah Wisnu dimulai dari salah satu program Kampus Merdeka dengan
              jenis kegiatan Studi Independen yang diadakan oleh
              Kemendikbudristek yaitu{' '}
              <a
                href="#"
                className="underline cursor-pointer montserrat font-semibold"
              >
                Bangkit Academy 2023 Batch 1.
              </a>{' '}
              Program ini memiliki dukungan dari perusahaan ternama seperti
              Google, GoTo, Traveloka, dan Dicoding. Dalam program ini setiap
              peserta diberikan proyek Capstone yang terdiri dari 6 anggota tim.
              Mereka harus menggabungkan pengetahuan dari tiga jalur
              pembelajaran yang berbeda yang telah mereka pilih selama mengikuti
              Bangkit Academy, yaitu Machine Learning, Mobile Development, dan
              Cloud Computing. <br />
              <br />
              Wisnu berhasil masuk ke dalam daftar 20 besar proyek Product
              Capstone terbaik, dan meraih dana investasi sebesar USD $10.000
              dari Google dan Kemendikbudristek. Selama perjalanan ini, Wisnu
              terus mengembangkan ide-ide inovatif dan berusaha menemukan solusi
              untuk tantangan berkelanjutan. Seiring berjalannya waktu, kami
              selalu berusaha memperbarui layanan kami sesuai dengan kebutuhan
              pengguna yang terus berkembang.
            </p>
          </div>
          <div className="pt-10 lg:pt-0 order-first sm:order-none">
            <img src="/assets/history_wisnu.png" />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute left-0 bottom-0 translate-y-[45vh]">
        <img
          src="assets/circle_history.svg"
          alt=""
          width="250"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default SejarahWisnu;
