"use client";
import Image from "next/image";
import { useEffect, useState, use } from "react";
import { videos } from "@/components/sample-data";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogNavigation } from "@/components/navigation";

type ProductProps = {
  id?: number;
  videoUrl?: string;
  thumbnailUrl?: string;
  productName?: string;
  description?: string;
  likes?: number;
  comments?: number;
  subscribedByUser?: boolean;
  likedByUser?: boolean;
  productPageUrl?: string;
  imageUrl?: string;
};

const Product = ({ params }: { params: Promise<{ slug: number }> }) => {
  const slug = use(params).slug;
  const [productID, setProductID] = useState<string>("0");
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [product, setProduct] = useState<ProductProps>({});

  const filterProductById = (
    products: ProductProps[],
    id: number
  ): ProductProps | undefined => {
    return products.filter((product) => product.id === id)[0];
  };

  useEffect(() => {
    setProductID(slug.toString());
  }, []);

  useEffect(() => {
    return setProduct(filterProductById(videos, parseInt(productID)) || {});
  }, [productID]);

  
  return (
    <>
      <div className="h-screen overflow-hidden bg-black grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block h-screen">
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="h-screen w-full"
            />
          )}
        </div>
        <div className="relative h-screen">
          <div className="absolute lg:hidden h-screen w-full">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="h-screen w-full"
              />
            )}
          </div>
          <div className="absolute top-0 left-0 h-screen flex flex-col justify-center items-center overflow-auto p-3 bg-black bg-opacity-90 w-full">
            <div className="flex-grow w-full flex flex-col justify-start items-start gap-3">
              <div className="flex justify-between items-center w-full">
                <div className="text-white tracking-wide text-xl sm:text-2xl md:text-3xl md:pl-3 flex justify-center items-center gap-2">
                  <img
                    src={product.thumbnailUrl}
                    alt="back"
                    className="w-9 h-9 rounded-sm border border-white/20 p-[2px]"
                  />
                  {product ? product.productName : ""}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-2xl sm:text-3xl md:text-5xl nav-logo text-white px-2 py-2 border border-white/20 shadow-md rounded-md"
                    >
                      TSq
                    </button>
                  </DialogTrigger>
                  <DialogNavigation />
                </Dialog>
              </div>
              <div className="text-justify w-full text-sm sm:text-base md:text-lg tracking-wide text-white/70 px-3 pr-5 mt-7 md:mt-10">
                {product ? product.description : ""}
              </div>
              <div className="text-white/90 text-sm sm:text-base md:text-lg tracking-wide px-3 mt-5">
                Price : $100 (Inclusive of all taxes)
              </div>
              <div className="grid grid-cols-2 px-3 gap-3 w-full font-semibold tracking-wide mt-5 text-sm sm:text-base md:text-lg">
                <button
                  className="bg-white/5 text-white/90 py-3 rounded-md flex items-center justify-center gap-4 shadow-md"
                  type="button"
                >
                  {product.likes ? product.likes : 0} Upvotes
                </button>
                <button
                  className="bg-white/5 text-white/90 py-3 rounded-md flex items-center justify-center gap-4 shadow-md"
                  type="button"
                >
                  {product.comments ? product.comments : 0} Reviews
                </button>
                <button
                  className="bg-white/5 text-white/90 py-3 rounded-md flex items-center justify-center gap-4 shadow-md"
                  type="button"
                >
                  {product.likedByUser ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="26px"
                      fill="#EA3323"
                    >
                      <path d="M480-147q-14 0-28.5-5T426-168l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="26px"
                      fill="#ffffff"
                    >
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  )}
                  {product.likedByUser ? "Loved By You" : "Like"}
                </button>
                <button
                  className="bg-white/80 text-black py-3 rounded-md flex justify-center items-center gap-4 shadow-md"
                  type="button"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 px-3 gap-3 w-full font-semibold tracking-wide mb-3 text-sm sm:text-base md:text-lg">
              <button
                className="bg-white/5 text-white/90 py-3 rounded-md flex items-center justify-center gap-4 shadow-md"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#CCCCCC"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm160-640h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720Zm200 200q17 0 28.5-11.5T640-560v-80h-80v80q0 17 11.5 28.5T600-520Zm-240 0q17 0 28.5-11.5T400-560v-80h-80v80q0 17 11.5 28.5T360-520Z" />
                </svg>
                Add to Cart
              </button>
              <button
                className="bg-white text-black py-3 rounded-md flex justify-center items-center gap-4 shadow-md"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z" />
                </svg>
                Buy Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
