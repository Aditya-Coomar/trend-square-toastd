"use client";
import React from "react";
import VerticalCarousel from "@/components/vertical-carousel";

const Home: React.FC = () => {
  const reels = [
    "/assets/video/video_5.mp4",
    "/assets/video/video_1.mp4",
    "/assets/video/video_2.mp4",
    "/assets/video/video_3.mp4",
    "/assets/video/video_4.mp4",
  ];

  return (
    <div>
      <VerticalCarousel items={reels} />
    </div>
  );
};

export default Home;
