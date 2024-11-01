import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  const headline = [
    { id: '#dataCollected', name: 'Data yang dikumpulkan' },
    { id: '#dataUsage', name: 'Penggunaan Data' },
    { id: '#datSharing', name: 'Pembagian Data' },
    { id: '#userControl', name: 'Kontrol Pengguna' },
    { id: '#dataDeletion', name: 'Penghapusan Data dan Retensi' },
    { id: '#analyticsTools', name: 'Alat Analitik dan Pelacakan' },
    { id: '#dataScurity', name: 'Keamanan Data' },
    { id: '#privacyPolice', name: 'Perubahan Kebijakan Privasi' },
    { id: '#contact', name: 'Kontak' },
  ];
  return (
    <>
      <Head>
        <title>Wisnu | Privacy Policy</title>
      </Head>
      <Nav />
      <div className="pt-8 pb-64">
        <div
          className="pl-10 md:pl-[18.75rem] flex items-center gap-x-7 py-4"
          style={{
            background:
              'linear-gradient(272.28deg, rgba(220, 96, 42, 0.83) 34.32%, rgba(220, 96, 42, 0) 98.1%)',
          }}
        >
          <div>
            <img src="assets/home_icon.svg" alt="" width="40" />
          </div>
          <div>
            <img src="assets/arrow_right.svg" alt="" />
          </div>
          <p className="">Kebijakan Privasi</p>
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
                Efektif dari 25 November 2023
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
              <h1 className="font-bold text-lg" id="dataCollected">
                Data yang Dikumpulkan
              </h1>
              <p>
                Kami di Wisnu mengumpulkan berbagai jenis data untuk menyediakan
                dan meningkatkan layanan kami kepada Anda. Berikut adalah
                rincian tentang data yang kami kumpulkan:
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Informasi Pribadi: Nama, gender, dan tanggal lahir dikumpulkan
                  untuk membuat profil pengguna yang memungkinkan penggunaan
                  layanan kami. Data ini juga membantu kami dalam
                  mengidentifikasi preferensi Anda untuk menyajikan rekomendasi
                  dan konten yang lebih personal.
                </li>

                <li>
                  Kontak: Alamat email Anda dikumpulkan sebagai bagian dari
                  proses pembuatan akun untuk keperluan komunikasi, seperti
                  pengiriman notifikasi layanan dan pemulihan akun. Password
                  Anda dikumpulkan dan disimpan dengan aman untuk melindungi
                  akses ke akun Anda.
                </li>

                <li>
                  Preferensi: Kami mengumpulkan informasi tentang preferensi dan
                  minat Anda yang dinyatakan melalui interaksi Anda dengan
                  aplikasi kami untuk menyediakan layanan yang lebih disesuaikan
                  dengan kebutuhan Anda.
                </li>

                <li>
                  Sosial Media: Jika Anda memilih untuk menghubungkan akun media
                  sosial Anda dengan aplikasi kami, kami mengumpulkan informasi
                  yang diperlukan untuk memfasilitasi fitur ini, seperti
                  mengidentifikasi pengguna media sosial dan konten yang Anda
                  buat atau bagikan melalui media sosial.
                </li>

                <li>
                  Data Teknis dan Penggunaan: Untuk meningkatkan kinerja dan
                  kegunaan aplikasi kami, kami mengumpulkan data teknis seperti
                  jenis perangkat, sistem operasi, pengaturan bahasa, dan data
                  penggunaan seperti seringnya penggunaan aplikasi dan tindakan
                  yang diambil dalam aplikasi.
                </li>
              </ol>
              <p>
                Kami juga dapat mengumpulkan data lain yang Anda berikan secara
                sukarela saat menggunakan layanan kami atau ketika Anda
                berkomunikasi dengan kami. Mohon diperhatikan bahwa kami hanya
                mengumpulkan data yang secara wajar diperlukan untuk menyediakan
                dan meningkatkan layanan kami, dan kami melakukannya dengan
                transparansi penuh dan dengan persetujuan Anda.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="dataUsage">
                Penggunaan Data
              </h1>
              <p>Data yang kami kumpulkan digunakan untuk:</p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Menggunakan Layanan Kami: Informasi pribadi Anda seperti nama,
                  gender, dan tanggal lahir diperlukan untuk membuat dan
                  mengelola akun Anda dalam aplikasi Wisnu, serta untuk
                  menyediakan layanan yang dipersonalisasi dan relevan dengan
                  kebutuhan Anda.
                </li>

                <li>
                  Autentikasi: Kami memerlukan alamat email dan password Anda
                  untuk mengautentikasi akses ke akun Anda dan untuk menjaga
                  keamanan akun Anda.
                </li>

                <li>
                  Personalisasi Konten: Preferensi yang Anda sampaikan melalui
                  aplikasi kami memungkinkan kami untuk menyesuaikan konten dan
                  rekomendasi yang lebih sesuai dengan minat dan kebutuhan Anda.
                </li>

                <li>
                  Analitik dan Pemahaman Pengguna: Kami menggunakan alat
                  analitik untuk mengumpulkan informasi yang teragregasi tentang
                  interaksi pengguna dengan aplikasi, yang membantu kami dalam
                  menganalisis perilaku pengguna dan tren penggunaan untuk
                  meningkatkan fungsionalitas dan kualitas aplikasi kami.
                </li>

                <li>
                  Optimalisasi Pemasaran: Kamu menggunakan alat analitik yang
                  digunakan untuk mengukur efektivitas kampanye pemasaran kami,
                  memahami bagaimana pengguna menemukan aplikasi kami, dan
                  meningkatkan strategi pemasaran kami berdasarkan perilaku
                  pengguna.
                </li>
              </ol>
              <p>
                Data yang dikumpulkan melalui alat analitik dijaga
                kerahasiaannya dan hanya digunakan secara agregat untuk tujuan
                statistik dan analisis perilaku pengguna. Tidak ada data yang
                secara eksplisit mengidentifikasi Anda sebagai individu yang
                akan dibagi dengan pihak ketiga tanpa persetujuan Anda.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="datSharing">
                Pembagian Data
              </h1>
              <p>
                Kami menghargai kepercayaan Anda dalam memberikan informasi
                pribadi Anda dan berkomitmen untuk tidak membagikannya dengan
                pihak ketiga untuk tujuan pemasaran atau komersial tanpa
                persetujuan Anda. Berikut adalah cara kami menangani data Anda:
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Penyedia Layanan: Kami mungkin perlu berbagi informasi Anda
                  dengan penyedia layanan pihak ketiga yang kami gunakan untuk
                  mendukung operasi bisnis kami, seperti penyedia layanan
                  hosting cloud dan layanan dukungan teknis. Penyedia layanan
                  ini diberi akses terbatas hanya untuk menyelesaikan
                  tugas-tugas tertentu atas nama kami dan wajib untuk tidak
                  mengungkapkan atau menggunakan informasi untuk tujuan lain
                </li>

                <li>
                  Analitik: Seperti yang dijelaskan sebelumnya, kami menggunakan
                  alat analitik seperti Firebase Analytics dan Branch untuk
                  memahami bagaimana aplikasi kami digunakan. Data yang
                  dikumpulkan oleh alat ini adalah agregat dan anonim, yang
                  berarti tidak dapat digunakan untuk mengidentifikasi Anda
                  secara pribadi.
                </li>

                <li>
                  Hukum dan Perlindungan: Kami mungkin mengungkapkan informasi
                  pribadi Anda jika diharuskan oleh hukum atau jika kami percaya
                  dengan itikad baik bahwa tindakan tersebut diperlukan untuk
                  mematuhi proses hukum yang berlaku, untuk melindungi hak atau
                  properti Wisnu, atau dalam situasi darurat untuk melindungi
                  keselamatan pribadi pengguna Wisnu atau masyarakat umum.
                </li>

                <li>
                  Non-Identifikasi dan Agregat: Kami mungkin berbagi informasi
                  non-pribadi atau agregat dengan mitra seperti penerbit,
                  pengiklan, analis, dan hukum, yang tidak mengungkapkan
                  informasi yang secara langsung mengidentifikasi Anda.
                </li>
              </ol>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="userControl">
                Kontrol Pengguna
              </h1>
              <p>
                Sebagai pengguna aplikasi Wisnu, Anda memiliki kontrol penuh
                atas informasi pribadi Anda. Kami menyediakan berbagai alat dan
                pengaturan dalam aplikasi yang memungkinkan Anda untuk
                mengakses, mengulas, memperbarui, dan menghapus informasi
                pribadi Anda:
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Akses dan Perbarui Informasi Pribadi: Anda dapat mengakses dan
                  memperbarui informasi pribadi Anda kapan saja melalui
                  pengaturan profil pengguna di dalam aplikasi.
                </li>

                <li>
                  Menghapus Informasi Pribadi: Jika Anda ingin menghapus akun
                  Anda, Anda dapat melakukannya melalui pengaturan aplikasi.
                  Penghapusan ini akan menghapus informasi pribadi Anda dari
                  database kami, kecuali informasi tertentu yang kami diwajibkan
                  untuk menyimpannya oleh undang-undang yang berlaku.
                </li>

                <li>
                  Pengelolaan Preferensi dan Notifikasi: Anda dapat mengubah
                  preferensi personalisasi dan pilihan notifikasi melalui
                  pengaturan aplikasi, memungkinkan Anda untuk menyesuaikan
                  jenis komunikasi yang Anda terima dari kami.
                </li>
              </ol>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="dataDeletion">
                Penghapusan Data dan Retensi
              </h1>
              <p>
                Kami memahami pentingnya melindungi privasi Anda dan memastikan
                bahwa data pribadi Anda dihapus sesuai dengan permintaan Anda
                dan sesuai dengan kebijakan privasi ini. Namun, mohon diketahui
                bahwa:
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Retensi Data: Meskipun informasi pribadi Anda akan dihapus
                  dari sistem kami setelah Anda meminta penghapusan, salinan
                  residual dapat tetap ada dalam cadangan sistem kami yang
                  dienkripsi dan aman untuk jangka waktu terbatas karena alasan
                  teknis.
                </li>

                <li>
                  Data Anonim dan Agregat: Kami juga mungkin mempertahankan data
                  anonim, yang telah dipisahkan dari identitas Anda, untuk
                  tujuan statistik dan analisis.
                </li>
              </ol>
              <p>
                Kami berkomitmen untuk memastikan bahwa privasi Anda terlindungi
                dan akan memastikan bahwa semua data pribadi, termasuk yang
                dibutuhkan untuk tujuan forensik, dijaga dengan standar keamanan
                tertinggi dan hanya digunakan sesuai dengan hukum yang berlaku.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="analyticsTools">
                Alat Analitik dan Pelacakan
              </h1>
              <p>
                Untuk terus meningkatkan aplikasi Wisnu dan layanan yang kami
                tawarkan, kami menggunakan berbagai alat analitik pihak ketiga.
                Ini membantu kami memahami bagaimana aplikasi kami digunakan dan
                memungkinkan kami untuk menganalisis data penggunaan untuk
                meningkatkan fungsi aplikasi. Selain penggunaan yang telah
                disebutkan sebelumnya, kami juga menggunakan alat analitik untuk
                memahami bagaimana layanan kami digunakan. Ini termasuk:
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Firebase Analytics: Kami menggunakan Firebase Analytics untuk
                  menganalisis penggunaan aplikasi, seperti frekuensi dan durasi
                  penggunaan, fitur yang digunakan, dan interaksi dengan
                  aplikasi. Informasi ini membantu kami mengoptimalkan dan
                  meningkatkan layanan kami.
                </li>

                <li>
                  Branch: Branch digunakan untuk melacak performa kampanye
                  pemasaran dan mengidentifikasi sumber trafik. Hal ini membantu
                  kami mengukur efektivitas strategi pemasaran kami dan
                  menyediakan pengalaman yang lebih relevan bagi Anda.
                </li>
              </ol>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="dataScurity">
                Keamanan Data
              </h1>
              <p>
                Di Wisnu, kami memahami bahwa keamanan data Anda adalah
                prioritas. Kami mengambil langkah-langkah yang komprehensif
                untuk melindungi informasi pribadi Anda dari akses, penggunaan,
                atau pengungkapan yang tidak sah. Berikut adalah beberapa
                tindakan keamanan yang kami terapkan:
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Enkripsi: Kami menggunakan teknologi enkripsi canggih untuk
                  melindungi data Anda saat transit dan saat disimpan di server
                  kami. Ini termasuk penggunaan Secure Sockets Layer (SSL) untuk
                  data yang dikirim antara aplikasi dan server kami.
                </li>

                <li>
                  Keamanan Infrastruktur: Server kami dihosting dengan
                  menggunakan layanan Google Cloud yang menawarkan infrastruktur
                  keamanan tingkat lanjut. Hal ini memastikan bahwa
                  infrastruktur yang menyokong aplikasi Wisnu terlindungi dari
                  ancaman keamanan fisik dan digital.
                </li>

                <li>
                  Manajemen Akses: Kami menerapkan kontrol akses yang ketat di
                  semua tingkatan teknologi kami. Hanya personel terotorisasi
                  yang memiliki kebutuhan untuk mengakses informasi pribadi Anda
                  untuk melakukan pekerjaan mereka yang diperbolehkan untuk
                  mengakses data tersebut.
                </li>

                <li>
                  Meskipun kami berusaha untuk melindungi data pribadi Anda,
                  tidak ada metode transmisi melalui internet atau metode
                  penyimpanan elektronik yang 100% aman. Oleh karena itu, kami
                  tidak dapat menjamin keamanan absolut. Jika Anda memiliki
                  alasan untuk percaya bahwa interaksi Anda dengan kami tidak
                  lagi aman (misalnya, jika Anda merasa bahwa keamanan akun Anda
                  telah dikompromikan), silakan segera beri tahu kami tentang
                  masalah tersebut dengan menghubungi kami di
                  hi@wisnusantara.id.
                </li>
              </ol>
            </div>

            <div>
              <h1 className="font-bold text-lg" id="privacyPolice">
                Perubahan Kebijakan Privasi
              </h1>
              <p>
                Kami di Wisnu berkomitmen untuk terus memperbarui dan
                meningkatkan layanan kami, yang dapat mencakup perubahan pada
                cara kami mengumpulkan, menggunakan, dan menangani informasi
                pribadi Anda. Oleh karena itu, kebijakan privasi kami dapat
                diubah dari waktu ke waktu.
              </p>
              <ol className="list-inside list-decimal pl-2">
                <li>
                  Pemberitahuan Perubahan: Setiap kali kami membuat perubahan
                  material pada kebijakan privasi kami, kami akan memberi tahu
                  Anda melalui email ke alamat yang terkait dengan akun Anda
                  atau melalui pemberitahuan yang jelas di aplikasi Wisnu
                  sebelum perubahan tersebut berlaku. Kami juga akan memperbarui
                  "tanggal terakhir diperbarui" di atas kebijakan privasi ini.
                </li>

                <li>
                  Tinjauan Rutin: Kami menyarankan Anda untuk secara rutin
                  meninjau kebijakan privasi ini untuk tetap informasi tentang
                  bagaimana kami melindungi informasi pribadi Anda. Penggunaan
                  terus menerus Anda atas layanan kami setelah pemberitahuan
                  tersebut akan dianggap sebagai penerimaan Anda terhadap
                  perubahan-perubahan tersebut.
                </li>

                <li>
                  Partisipasi Pengguna: Kami menyambut umpan balik Anda mengenai
                  kebijakan dan saran Anda untuk perbaikan. Jika Anda memiliki
                  pertanyaan atau komentar tentang kebijakan privasi kami,
                  silakan hubungi kami di hi@wisnusantara.id.
                </li>

                <li>
                  Batas Waktu Pemberitahuan: Kami akan memberikan pemberitahuan
                  setidaknya 30 hari sebelum kebijakan yang diperbarui mulai
                  berlaku untuk memberikan Anda kesempatan yang cukup untuk
                  meninjau perubahan tersebut.
                </li>
              </ol>
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

export default PrivacyPolicy;
