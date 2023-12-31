"use client";
import { useEffect, useState } from "react";

function NavBar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (offset > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={`flex w-[100%] items-center justify-center gap-[100px] py-5 fixed top-0 z-[5]  ${
        !isScroll
          ? " bg-[rgb(54,48,85,0.02)]"
          : "backdrop-blur-[1px]  bg-[rgb(54,48,85,0.6)]"
      }`}
    >
      <h2
        className={`font-r text-sm${
          !isScroll ? " text-primary-700" : " text-light-500"
        }`}
      >
        About
      </h2>
      <h2
        className={`font-r text-sm${
          !isScroll ? " text-primary-700" : " text-light-500"
        }`}
      >
        Skills
      </h2>
      <h2 className="font-r text-sm text-light-500">Designs</h2>
      <h2 className="font-r text-sm text-light-500">Contact</h2>
    </div>
  );
}

export default NavBar;
