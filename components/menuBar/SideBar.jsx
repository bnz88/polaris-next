"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Sosmed from "../ui/Sosmed";
import Link from "next/link";
import Image from "next/image";
import Logo from "../ui/Logo";
import LinkGame from "../ui/LinkGame";
import ArticleCard from "../ui/ArticleCard";
import DaftarMasuk from "../ui/DaftarMasuk";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => setIsVisible(!isVisible);
  const pathname = usePathname();
  useEffect(() => {
    // This code will run whenever the 'pathname' changes, indicating a route change.
    console.log("Route changed to:", pathname, isVisible);
    if (isVisible) {
      toggleMenu();
    }

    // Perform actions here, e.g., update state, send analytics, etc.
  }, [pathname]);
  return (
    <div className="dropdown-mega  inline-flex flex-col items-center justify-center px-5 cursor-pointer">
      <span
        className="text-[12px] uppercase flex flex-col items-center justify-end"
        onClick={toggleMenu}
      >
        <Image
          src="/assets/icn-hamburger-menu.png"
          width="35"
          height="33"
          alt="Menu"
          sizes="100vw"
        ></Image>
        Menu
      </span>

      <div
        className={`${
          isVisible ? "" : "hidden"
        } *:mb-4 text-left p-4 bg-(--menu-bar-dropdown-bg) overflow-auto h-(--menu-bar-height-max)  absolute right-0 left-0 bottom-(--menu-bar-height) text-[#fff]`}
      >
        <div className="absolute right-[10px] top-[10px]" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="text-center">
          <Logo></Logo>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/assets/img-menu-promosi.png"
              width="366"
              height="115"
              alt="Promosi"
            ></Image>
          </Link>
        </div>
        <DaftarMasuk></DaftarMasuk>
        {/* menu collapsible */}
        <div className="*:mb-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger className="AccordionTrigger flex text-[16px] uppercase py-1 gap-1  justify-start items-center">
                <div className="icon-accordion">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>Akun</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-profile.png"
                      width="24"
                      height="24"
                      alt="Profil"
                    ></Image>
                    Profil
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-bankinfo.png"
                      width="24"
                      height="24"
                      alt="Detil Bank"
                    ></Image>
                    Detil Bank
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-loyalty.png"
                      width="24"
                      height="24"
                      alt="Loyalty"
                    ></Image>
                    Loyalty
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-responsible.png"
                      width="24"
                      height="24"
                      alt="Disiplin Taruhan"
                    ></Image>
                    Disiplin Taruhan
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-inbox.png"
                      width="24"
                      height="24"
                      alt="Loyalty"
                    ></Image>
                    Loyalty
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-profile.png"
                      width="24"
                      height="24"
                      alt="Riwayat Taruhan"
                    ></Image>
                    Riwayat Taruhan
                  </LinkGame>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-5">
              <AccordionTrigger className="AccordionTrigger flex text-[16px] uppercase py-1 gap-1  justify-start items-center">
                <div className="icon-accordion">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>Kasir</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-wallet.png"
                      width="24"
                      height="24"
                      alt="Dompet"
                    ></Image>
                    Dompet
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-wallet.png"
                      width="24"
                      height="24"
                      alt="Deposit QR"
                    ></Image>
                    Deposit QR
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-loyalty.png"
                      width="24"
                      height="24"
                      alt="Loyalty"
                    ></Image>
                    Deposit Bank
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-color-withdraw.png"
                      width="24"
                      height="24"
                      alt="Tarik Dana"
                    ></Image>
                    Tarik Dana
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-[#1e235a] p-3 justify-start gap-2"
                  >
                    <Image
                      src="/assets/icn-riwayat taruhan.png"
                      width="24"
                      height="24"
                      alt="Riwayat Transaksi"
                    ></Image>
                    Riwayat Transaksi
                  </LinkGame>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="AccordionTrigger flex text-[16px] uppercase py-1 gap-1  justify-start items-center">
                <div className="icon-accordion">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>Permainan</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <LinkGame
                    url="/bola-tangkas"
                    cmClass="bg-gradient-to-r from-[#be5ffa] to-[#905feb]"
                    imageUrl="permainan-Bolatangkas.png"
                  >
                    Bola Tangkas
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-gradient-to-r from-[#01b7fd] to-[#0182c5]"
                    imageUrl="permainan-slotonline.png"
                  >
                    Slot Online
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-gradient-to-r from-[#9bb900] to-[#218337]"
                    imageUrl="permainan-olahraga.png"
                  >
                    Olahraga
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-gradient-to-r from-[#f55578] to-[#c80f3a]"
                    imageUrl="permainan-Livecasino.png"
                  >
                    Live Casino
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-gradient-to-r from-[#946618] to-[#874400]"
                    imageUrl="permainan-togel.png"
                  >
                    Togel
                  </LinkGame>
                  <LinkGame
                    url="/"
                    cmClass="bg-gradient-to-r from-[#ff9600] to-[#f75703]"
                    imageUrl="permainan-togel.png"
                  >
                    Semua Provider
                  </LinkGame>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="AccordionTrigger flex text-[16px] uppercase py-1 gap-1  justify-start items-center">
                <div className="icon-accordion">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>Editorial</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <ArticleCard imageUrl="img-livecasino3.png">
                    Title Of Article, Shoud be long enough to cover
                  </ArticleCard>
                  <ArticleCard imageUrl="img-slot3.png">
                    Title Of Article, Shoud be long enough to cover
                  </ArticleCard>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger className="AccordionTrigger flex text-[16px] uppercase py-1 gap-1  justify-start items-center">
                <div className="icon-accordion">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>Lainnya</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <LinkGame url="/">Tentang Bonanza88</LinkGame>
                  <LinkGame url="/">Halaman Promosi</LinkGame>
                  <LinkGame url="/">Pusat Download</LinkGame>
                  <LinkGame url="/">Customer Service</LinkGame>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Sosmed */}
        <Sosmed></Sosmed>
      </div>
    </div>
  );
};

export default SideBar;
