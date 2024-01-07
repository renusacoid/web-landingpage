import Image from "next/image";
import React from "react";

const SejarahWisnu = () => {
  return (
    <section className="pt-[5vh] md:pt-[30vh] relative">
      <div className="px-4 md:px-[15%]">
        <h1 className="font-bold text-6xl mb-14 bg-custom-gradient text-transparent bg-clip-text inline-block pb-3">
          Sejarah Wisnu
        </h1>
        <div className="flex flex-col-reverse items-center w-full lg:flex-row gap-x-[10vw]">
          <p className="max-w-2xl text-justify text-lg">
            Kisah Wisnu dimulai dari salah satu program Kampus Merdeka dengan
            jenis kegiatan Studi Independen yang diadakan oleh Kemendikbudristek
            yaitu{" "}
            <a href="#" className="underline cursor-pointer">
              Bangkit Academy 2023 Batch 1.
            </a>{" "}
            Program ini memiliki dukungan dari perusahaan ternama seperti
            Google, GoTo, Traveloka, dan Dicoding. Dalam program ini setiap
            peserta diberikan proyek Capstone yang terdiri dari 6 anggota tim.
            Mereka harus menggabungkan pengetahuan dari tiga jalur pembelajaran
            yang berbeda yang telah mereka pilih selama mengikuti Bangkit
            Academy, yaitu Machine Learning, Mobile Development, dan Cloud
            Computing. <br />
            <br />
            Wisnu berhasil masuk ke dalam daftar 20 besar proyek Product
            Capstone terbaik, dan meraih dana investasi sebesar USD $10.000 dari
            Google dan Kemendikbudristek. Selama perjalanan ini, Wisnu terus
            mengembangkan ide-ide inovatif dan berusaha menemukan solusi untuk
            tantangan berkelanjutan. Seiring berjalannya waktu, kami selalu
            berusaha memperbarui layanan kami sesuai dengan kebutuhan pengguna
            yang terus berkembang.
          </p>
          <div className="max-w-full sm:max-w-2xl md:max-w-2xl lg:min-w-64">
            <Image
              src="/assets/history_wisnu.png"
              width={400}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute left-0 -translate-y-[20%]">
        <img src="assets/circle_history.svg" alt="" width="250" />
      </div>
    </section>
  );
};

export default SejarahWisnu;
