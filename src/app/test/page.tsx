

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black">
        <Carousel
          className="h-screen"
          orientation="vertical"
          opts={{ align: "start" }}
        >
          <CarouselContent className="h-screen overflow-auto">
            {[1, 2, 3, 4].map((index) => (
              <CarouselItem
                className="flex flex-col justify-center items-center h-screen"
                key={index}
              >
                <video
                  loop
                  controls
                  className="h-full w-auto my-auto"
                  autoPlay={true}
                  muted
                  playsInline
                >
                  <source
                    src={`/assets/video/video_${String(index)}.mp4`}
                    type="video/mp4"
                  />
                </video>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
