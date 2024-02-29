import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(248deg, rgba(194, 194, 194, 0.86) 32.74%, rgba(255, 255, 255, 0.55) 86.25%)",
      }}
      className="pb-8"
      id="footer"
    >
      <div className="grid md:grid-cols-4 px-10 md:px-28 pt-28 pb-14 justify-items-center">
        <div className="mb-8 md:mb-0">
          <a href="#header">
            <img
              src="assets/logo_wisnu_text.png"
              alt="Logo With Text"
              width="300"
            />
          </a>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="text-[#DC602A] font-bold text-2xl mb-3 md:mb-8">
            Tentang Wisnu
          </h2>
          <Link href={"/privacy-policy"}>
            <p className="text-lg font-medium md:mb-8">Kebijakan Privasi</p>
          </Link>
          <Link href={"/term-of-use"}>
            <p className="text-lg font-medium">Syarat dan Ketentuan</p>
          </Link>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="text-[#DC602A] font-bold text-2xl mb-3 md:mb-8">
            Hubungi Wisnu
          </h2>

          <p className="text-lg font-medium mb-2">
            Layanan Pengaduan <br />
            Konsumen Wisnu
          </p>
          <p>+628xxxxxxxxx</p>
          <p className="font-medium text-lg mt-5">Email</p>
          <p>
            wisnusocialnetwork
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@gmail.com/
          </p>
          <p className="font-medium text-lg mt-5">Bisnis & Kerja Sama</p>
          <p>
            wisnusocialnetwork
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@gmail.com/
          </p>
        </div>

        <div>
          <div className="flex items-center gap-x-16">
            <div className="hidden md:block">
              <img src="assets/line_footer.svg" width="1" />
            </div>

            <div>
              <div className="pb-4">
                <a
                  href="https://play.google.com/store/apps/details?id=id.wisnusantara.user.release"
                  target="_blank"
                >
                  <img
                    src="assets/googleplay_badge.svg"
                    alt="Google Play Button"
                    width="200"
                  />
                </a>
              </div>
              <div className="pb-8">
                <a
                  href="https://apps.apple.com/id/app/wisnu/id6473098383"
                  target="_blank"
                >
                  <img
                    src="assets/appstore_badge.svg"
                    alt="Google Play Button"
                    width="200"
                  />
                </a>
              </div>
              <a
                className="flex items-center gap-x-2 pb-4"
                href="https://www.instagram.com/wisnusantara.id/"
                target="_blank"
              >
                <img
                  src="assets/insta.svg"
                  alt="Google Play Button"
                  width="45"
                />
                <p>wisnusantara.id</p>
              </a>
              <a
                className="flex items-center gap-x-2 pb-4"
                href="https://www.linkedin.com/company/wisnu/"
                target="_blank"
              >
                <img
                  src="assets/linkedin.svg"
                  alt="Google Play Button"
                  width="45"
                />
                <p>Wisnu</p>
              </a>
              <a
                className="flex items-center gap-x-2"
                href="https://www.tiktok.com/@wisnusantara.id"
                target="_blank"
              >
                <img
                  src="assets/tiktok_logo.png"
                  alt="Google Play Button"
                  width="45"
                />
                <p>wisnusantara.id</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <h2>ALL RIGHTS RESERVED 2023</h2>
      </div>
    </footer>
  );
};

export default Footer;
