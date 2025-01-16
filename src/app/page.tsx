"use client";
import Image from "next/image";
import React from "react";
import VerticalCarousel from "@/components/vertical-carousel";
import { DialogNavigation } from "@/components/navigation";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center h-screen overflow-hidden bg-black">
        <div className="h-full hidden md:flex flex-col justify-start items-start px-5 pt-5">
          <div className="flex justify-between items-center w-full">
            <div className="text-[55px] nav-logo text-white">TrendSquare</div>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  title="menu"
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36px"
                    viewBox="0 -960 960 960"
                    width="36px"
                    fill="#EFEFEF"
                  >
                    <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
                  </svg>
                </button>
              </DialogTrigger>
              <DialogNavigation />
            </Dialog>
          </div>
          <div className="text-lg text-white/80 tracking-wide mt-2">
            Discover the latest trends in fashion, beauty, and lifestyle.
          </div>
          <div className="flex w-full justify-start items-center text-white mt-20 text-2xl tracking-wide font-medium">
            Your Favourites
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-4">
            {[...Array(11)].map((_, index) => (
              <div className="flex flex-col gap-2 justify-center items-center" key={index}>
                <Image
                  src={`/sample_thumbnail.jpg`}
                  alt="home"
                  width={75}
                  height={75}
                  className="rounded-md border border-white border-opacity-70 p-1"
                />
                <div className="text-white/85 text-sm tracking-wide">
                  Category {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <VerticalCarousel />
        </div>
      </div>
    </>
  );
};

export default Home;
