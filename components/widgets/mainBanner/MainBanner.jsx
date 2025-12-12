import Link from "next/link";
import Image from "next/image";
import DaftarMasuk from "@/components/ui/DaftarMasuk";
import HomeLink from "@/components/ui/HomeLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MainBanner = () => {
  return (
    <div className="relative ">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="bg-[#000] bg-cover pb-[258px] relative"
            >
              <Image
                src="/assets/img-backgroundhome.png"
                alt="bg1 slide"
                sizes="responsive"
                fill={true}
                className="absolute left-0 top-0 right-0 bottom-0 z-012"
              ></Image>
              <div className="p-3 pb-0 flex justify-evenly items-center relative z-10">
                <div className="pl-5">
                  <h2 className="text-[32px]/10 font-bold text-shadow-[1px_1px_4px_rgb(0_0_0_/1)] uppercase">
                    Welcome <br />
                    Cashback <br />{" "}
                    <span className="text-[62px] my-2 inline-block">100RB</span>
                    <br />
                    khusus pemain BARU
                  </h2>
                  <Link href="/" className="btn btn-banner mt-3">
                    Gabung Sekarang
                  </Link>
                </div>
                <Image
                  src="/assets/img-subjecthomeBL.png"
                  alt="Banner"
                  height="404"
                  width="134"
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="p-3 *:mb-4 absolute bottom-0 right-0 left-0">
        <HomeLink></HomeLink>
        <DaftarMasuk></DaftarMasuk>
      </div>
    </div>
  );
};

export default MainBanner;
