import React, { useEffect, useRef } from "react";
import Image from "next/image";
interface VerticalCarouselProps {
  items: string[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState<boolean>(true);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const [fullDescription, setFullDescription] = React.useState<any>(null);
  return (
    <div className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory">
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className="h-screen scroll-snap-start flex justify-center items-center bg-black w-full border-b border-white"
        >
          <div className="relative h-full w-full">
            <video
              ref={videoRef}
              loop
              className="h-full w-auto my-auto mx-auto"
              playsInline
              muted={isMuted}
              autoPlay={true}
            >
              <source src={item} type="video/mp4" />,
            </video>
            <div className="absolute top-0 left-0 text-white h-full w-full flex flex-col justify-between items-center bg-black bg-opacity-20 pb-6">
              <div className="flex justify-between items-center w-full">
                <div></div>
                <button
                  title="video-mute-unmute"
                  type="button"
                  onClick={toggleMute}
                  className="tracking-wide font-medium p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#CCCCCC"
                  >
                    {isMuted ? (
                      <path d="M671-177q-11 7-22 13t-23 11q-15 7-30.5 0T574-176q-6-15 1.5-29.5T598-227q4-2 7.5-4t7.5-4L480-368v111q0 27-24.5 37.5T412-228L280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h88L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-93-93Zm89-304q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131t58 197q0 33-6 65.5T817-353q-8 22-24.5 27.5t-30.5.5q-14-5-22.5-18t-.5-30q11-26 16-52.5t5-55.5ZM591-623q33 21 51 63t18 80v10q0 5-1 10-2 13-14 17t-22-6l-51-51q-6-6-9-13.5t-3-15.5v-77q0-12 10.5-17.5t20.5.5Zm-201-59q-6-6-6-14t6-14l22-22q19-19 43.5-8.5T480-703v63q0 14-12 19t-22-5l-56-56Z" />
                    ) : (
                      <path d="M760-481q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131.5T840-481q0 108-58 196.5T627-153q-16 7-31.5 0T574-176q-5-15 2-29.5t22-21.5q74-34 118-102.5T760-481ZM280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Zm380-120q0 42-19 79.5T591-339q-10 6-20.5.5T560-356v-250q0-12 10.5-17.5t20.5.5q31 25 50 63t19 80Z" />
                    )}
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-8 items-center justify-end">
                <div className="flex justify-between items-end w-full">
                  <div className="flex flex-col gap-2 items-start px-2">
                    <div className="flex gap-2 text-white items-center">
                      <Image
                        alt="thumbnail"
                        src="/sample_thumbnail.jpg"
                        width={24}
                        height={24}
                        className="rounded-full border border-white border-opacity-70 p-[1px]"
                      />
                      <span className="text-base tracking-wide font-medium">
                        Product Name
                      </span>
                      <button
                        type="button"
                        title="subscribe"
                        className="px-3 py-1 text-sm text-white border border-white rounded-md tracking-wide font-medium"
                      >
                        Subscribe
                      </button>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 text-white/85 text-sm text-justify p-2 bg-black bg-opacity-40 rounded-md">
                      {fullDescription == index
                        ? description
                        : `${description.slice(0, 100)}...`}
                      <button
                        type="button"
                        onClick={() => {
                          setFullDescription(
                            fullDescription == index ? null : index
                          );
                        }}
                        className="text-white/70 text-sm tracking-wider font-semibold"
                      >
                        {fullDescription == index ? "Read less" : "Read more"}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center gap-6 bg-transparent px-2">
                    <button
                      className="flex flex-col gap-1 items-center justify-center"
                      title="like-unlike-toggle"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32px"
                        viewBox="0 -960 960 960"
                        width="32px"
                        fill="#ffffff"
                      >
                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                      </svg>
                      <span className="text-white tracking-wider text-xs">
                        321
                      </span>
                    </button>
                    <button
                      className="flex flex-col gap-1 items-center justify-center"
                      title="send"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32px"
                        viewBox="0 -960 960 960"
                        className="-rotate-45"
                        width="32px"
                        fill="#ffffff"
                      >
                        <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                      </svg>
                      <span className="text-white tracking-wider text-xs">
                        Share
                      </span>
                    </button>
                    <button
                      className="flex flex-col gap-1 items-center justify-center"
                      title="send"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32px"
                        viewBox="0 -960 960 960"
                        width="32px"
                        fill="#ffffff"
                      >
                        <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
                      </svg>
                      <span className="text-white tracking-wider text-xs">
                        4321
                      </span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-slate-50 rounded-md px-5 py-2 w-10/12 text-base flex gap-4 justify-center items-center text-black tracking-wide font-semibold shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#000000"
                  >
                    <path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z" />
                  </svg>
                  <span>Visit Product Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCarousel;
