import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-start items-center w-full px-3 py-2">
        <span className="text-3xl nav-logo tracking-wider">TrendSquare</span>
      </div>
    </>
  );
};

const DialogNavigation = () => {
  const router = useRouter();
  return (
    <>
      <DialogContent className="bg-opacity-80 bg-white/85 text-black w-[98%] rounded-sm">
        <DialogHeader>
          <DialogTitle className="hidden">Menu</DialogTitle>
          <DialogDescription className="hidden">
            Discover the latest trends in fashion, beauty, and lifestyle.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center">
          {["Home", "Product", "About", "Contact"].map((item, index) => (
            <button
              className={`text-black/85 text-lg tracking-wide py-4 border-b border-black/10 w-full font-medium text-center`}
              key={index}
              type="button"
              onClick={() => {
                if (item === "Home") {
                  router.push("/");
                } else {
                  alert(`You clicked on ${item}`);
                }
              }}
            >
              {item}
            </button>
          ))}
          <div className="text-black/85 text-lg tracking-wide py-5 w-full text-center font-medium">
            Sign In
          </div>
        </div>
      </DialogContent>
    </>
  );
};

export { Navbar, DialogNavigation };
