"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";

const Marque = () => {
  return (
    <div className="bg-black text-white py-2 px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
          AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }),
        ]}
      >
        <CarouselContent className="**:text-center **:text-nowrap">
          <CarouselItem>
            1. Kami akan melakukan maintenance mulai dari jem 7 pagi, harap
            logout
          </CarouselItem>
          <CarouselItem>test 3</CarouselItem>
          <CarouselItem>test 3</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Marque;
