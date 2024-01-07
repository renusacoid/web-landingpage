import React from "react";

const VisiMisi = () => {
  return (
    <section className="relative">
      <div className="hidden md:block absolute left-0 top-20">
        <img src="assets/circle_vm.svg" width="300" />
      </div>
      <div className="grid h-screen place-items-center">
        <div className="text-center px-4 md:px-0">
          <h1 className="font-bold text-6xl bg-custom-gradient text-transparent bg-clip-text inline-block pb-10">
            VISI
          </h1>
          <p className="mb-10 text-lg max-w-2xl mx-auto">
            Menjadi mitra terpercaya bagi para wisatawan dalam menjelajahi
            keindahan Indonesia,dengan memberikan informasi, kemudahan, keamanan
            dan kenyamanan.
          </p>
          <h1 className="font-bold text-6xl bg-custom-gradient text-transparent bg-clip-text inline-block pb-10">
            MISI
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg">1. Membangun Komunitas Perjalanan</p>
            <p className="text-lg">
              2. Menghubungkan Traveler dengan Pemandu dan penyelenggara open
              trip yang berpengalaman dan terpercaya
            </p>
            <p className="text-lg">
              3. Mengutamakan Keamanan dan Kepuasan Pelanggan
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 translate-y-[45vh]">
        <img src="assets/circle_vm_reverse.svg" width="300" />
      </div>
    </section>
  );
};

export default VisiMisi;
