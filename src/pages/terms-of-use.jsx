import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

const TermOfUse = () => {
  const headline = [
    { id: '#acceptance', name: 'Penerimaan Ketentuan' },
    { id: '#useOfServices', name: 'Penggunaan Layanan' },
    { id: '#hki', name: 'Hak Kekayaan Intelektual' },
    { id: '#termination', name: 'Penghentian' },
    { id: '#limitation', name: 'Pembatasan Tanggung Jawab' },
    { id: '#changes', name: 'Perubahan Ketentuan' },
    { id: '#contact', name: 'Kontak' },
  ];
  return (
    <>
      <Head>
        <title>Wisnu | Term of Use</title>
      </Head>
      <Nav />
      <div className="pt-8 pb-64">
        <div
          className="pl-10 md:pl-[18.75rem] flex items-center gap-x-7 py-4"
          style={{
            background:
              'linear-gradient(272.28deg,rgba(220, 96, 42, 0.83) 34.32%,rgba(220, 96, 42, 0) 98.1%)',
          }}
        >
          <div>
            <img src="assets/home_icon.svg" alt="" width="40" />
          </div>
          <div>
            <img src="assets/arrow_right.svg" alt="" />
          </div>
          <p className="">Syarat dan Ketentuan</p>
        </div>

        <div className="flex w-full pl-4 md:pl-[18.75rem] pt-24 gap-x-4 md:gap-x-24">
          <div className="">
            <h1
              style={{ background: 'rgba(6, 6, 6, 0.1)' }}
              className="px-6 py-2 my-2 rounded-xl font-bold"
            >
              PENGANTAR
            </h1>
            <div className="flex flex-col pl-6">
              {headline.map((data) => (
                <Link key={data.id} className="my-2 py-2" href={`${data.id}`}>
                  {data.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="justify-self-start flex flex-col gap-y-10 w-8/12 text-justify pr-4 md:pr-32">
            <div>
              <h1 className="font-bold text-lg">
                Ketentuan Penggunaan Layanan
              </h1>
              <p className="font-semibold text-[#5B5B5B]">Wisnu</p>
              <p className="font-medium text-[#777373]">
                Efektif dari 01 Desember 2023
              </p>
              <p className="font-medium text-[#777373]">
                Diperbarui pada 02 September 2024
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg">Pengantar</h1>
              <p>
                Selamat datang di Wisnu, aplikasi yang disediakan oleh PT. Ruang Eksplorasi Nusantara ("kami", "kita", atau "perusahaan"). Ketentuan
                Penggunaan ini mengatur akses dan penggunaan Anda terhadap
                layanan aplikasi Wisnu ("Layanan").
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="acceptance">
                Penerimaan Ketentuan
              </h1>
              <p>
                Dengan mengakses atau menggunakan Layanan kami, Anda mengakui
                bahwa Anda telah membaca, memahami, dan setuju untuk terikat
                oleh ketentuan dan syarat ini, termasuk kebijakan privasi kami.
                Jika Anda tidak setuju, Anda harus berhenti menggunakan Layanan
                kami segera.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="useOfServices">
                Penggunaan Layanan
              </h1>
              <p>
                1. Layanan kami dirancang untuk memberikan pengalaman yang
                personal dan informatif. Anda setuju untuk menggunakan Layanan
                hanya untuk tujuan yang sah dan tidak untuk kegiatan yang
                melanggar hukum atau merugikan orang lain.
              </p>
              <p>
                2. Anda bertanggung jawab atas segala aktivitas yang terjadi di
                bawah akun Anda dan setuju untuk segera memberitahu kami tentang
                penggunaan yang tidak sah dari akun Anda.
              </p>
              <p>
                3. Kami berhak untuk menolak layanan, menutup akun, atau
                mengubah atau menghapus konten jika diperlukan.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="hki">
                Hak Kekayaan Intelektual
              </h1>
              <p>
                Anda mengakui bahwa semua hak atas konten, termasuk desain,
                teks, grafik, logo, ikon, gambar, dan semua materi lainnya,
                adalah milik PT. Ruang Eksplorasi Nusantara atau pihak ketiga yang
                memberikan lisensi kepada kami. Penggunaan tidak sah atas materi
                ini dapat melanggar hukum hak cipta, merek dagang, dan
                undang-undang lainnya.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="termination">
                Penghentian
              </h1>
              <p>
                Kami dapat menghentikan atau menangguhkan akses Anda ke Layanan
                kami segera, tanpa pemberitahuan atau tanggung jawab, atas
                alasan apa pun, termasuk tanpa batasan jika Anda melanggar
                Ketentuan Penggunaan ini.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="limitation">
                Pembatasan Tanggung Jawab
              </h1>
              <p>
                Kami tidak menjamin bahwa Layanan akan bebas dari kesalahan atau
                gangguan. Selanjutnya, kami tidak bertanggung jawab atas
                kerugian atau kerusakan yang mungkin Anda alami sebagai hasil
                dari penggunaan atau ketidakmampuan menggunakan Layanan kami.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="changes">
                Perubahan Ketentuan
              </h1>
              <p>
                Kami berhak untuk merevisi Ketentuan ini sewaktu-waktu. Anda
                setuju bahwa tanggung jawab Anda untuk meninjau Ketentuan ini
                secara berkala untuk mengetahui perubahan. Penggunaan Anda yang
                berkelanjutan setelah perubahan tersebut akan dianggap sebagai
                penerimaan Anda terhadap perubahan tersebut.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="contact">
                Kontak
              </h1>
              <p>
                Jika Anda memiliki pertanyaan, komentar, atau keluhan terkait
                dengan Ketentuan Penggunaan ini, Anda dapat menghubungi kami
                melalui email di hi@wisnusantara.id.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermOfUse;
