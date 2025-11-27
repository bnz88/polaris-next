import "./style.css";

import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";

import { useTranslations } from "next-intl";

const MenuBar = () => {
  const t = useTranslations("menuBar");
  return (
    <div className="menubar block  fixed bottom-0 left-0 z-50 w-full h-(--menu-bar-height) text-(--menu-bar-color) bg-(--menu-bar-bg) ">
      <div className="grid h-full max-w-lg grid-cols-5 *:text-nowrap  mx-auto font-medium">
        <Link
          className="inline-flex flex-col items-center justify-center px-5 "
          href="/"
        >
          <span className="text-[12px] uppercase flex flex-col items-center justify-end">
            <Image
              src="/assets/icon-home-lit.png"
              width="35"
              height="33"
              alt="Beranda"
              sizes="100vw"
            ></Image>
            {t("label.home")}
          </span>
        </Link>

        <Link
          className="inline-flex flex-col items-center justify-center px-5 "
          href="/bola-tangkas"
        >
          <span className="text-[12px] uppercase flex flex-col items-center justify-end">
            <Image
              src="/assets/icn-tentangbonanza-24.png"
              width="35"
              height="33"
              alt="Bola Tangkas"
              sizes="100vw"
            ></Image>
            Bonanza88
          </span>
        </Link>
        <Link
          className="inline-flex flex-col items-center justify-center px-5 "
          href="/bola-tangkas"
        >
          <span className="text-[12px] uppercase flex flex-col items-center justify-end">
            <Image
              src="/assets/icn-title-promosi-32.png"
              width="35"
              height="33"
              alt="Promosi"
              sizes="100vw"
            ></Image>
            {t("label.register")}
          </span>
        </Link>
        <Link
          className="inline-flex flex-col items-center justify-center px-5 "
          href="/bola-tangkas"
        >
          <span className="text-[12px] uppercase flex flex-col items-center justify-end">
            <Image
              src="/assets/icn-bantuan-livechat-lit.png"
              width="35"
              height="33"
              alt="CS"
              sizes="100vw"
            ></Image>
            CS
          </span>
        </Link>
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default MenuBar;
