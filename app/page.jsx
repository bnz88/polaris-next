import DaftarMasuk from "@/components/ui/DaftarMasuk";
import HomeLink from "@/components/ui/HomeLink";
import Cards from "@/components/ui/Cards";
import ArticleCard from "@/components/ui/ArticleCard";
import Tags from "@/components/ui/Tags";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <div className="relative ">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="bg-[#9b0023] pb-[258px]">
                <div className="p-3 pb-0 flex justify-evenly items-center">
                  <div className="pl-5">
                    <h2 className="text-[32px]/10 font-bold text-shadow-[1px_1px_4px_rgb(0_0_0_/1)] uppercase">
                      Welcome <br />
                      Cashback <br />{" "}
                      <span className="text-[62px] my-2 inline-block">
                        100RB
                      </span>
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

      <div className="p-3">
        <Cards header="bolatangkas">
          <ArticleCard
            imageUrl="img-livecasino3.png"
            desc="Short description that is less than 160 characters, contain proper metadata (as description) so it is indexable by Google SEO"
            type="2"
          >
            Title Of Article, Shoud be long enough to cover across two full
            lines
          </ArticleCard>
        </Cards>
      </div>

      <div className="p-3">
        <Cards header="MesinSlot">
          <ArticleCard imageUrl="img-livecasino3.png" type="1">
            Title Of Article, Shoud be long enough to cover across two full
            lines
          </ArticleCard>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ArticleCard imageUrl="img-livecasino3.png" type="3">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="3">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
          </div>
        </Cards>
      </div>

      <div className="p-3">
        <Cards header="olahraga">
          <div className="flex flex-col gap-3">
            <ArticleCard imageUrl="img-livecasino3.png" type="1">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="4">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="4">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="4">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
          </div>
        </Cards>
      </div>

      <div className="p-3">
        <Cards header="Togel">
          <ArticleCard imageUrl="img-livecasino3.png" type="1">
            Title Of Article, Shoud be long enough to cover across two full
            lines
          </ArticleCard>
        </Cards>
      </div>

      <div className="p-3">
        <Tags></Tags>
      </div>
    </div>
  );
}
