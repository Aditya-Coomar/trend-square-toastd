import React, { useEffect, useRef } from "react";

interface VerticalCarouselProps {
  items: string[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.9, // Trigger when 90% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }, observerOptions);

    const items = container.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory"
    >
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className="h-screen scroll-snap-start flex justify-center items-center bg-black w-full"
        >
          <div className="relative h-full w-full">
            <video
              loop
              controls
              className="h-full w-auto my-auto p-[2px]"
              muted
              playsInline
              autoPlay
            >
              <source src={item} type="video/mp4" />,
            </video>
            <div className="absolute top-0 left-0 text-white h-full w-full flex justify-center items-center bg-black bg-opacity-20">
              {index + 1} / {items.length}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCarousel;
