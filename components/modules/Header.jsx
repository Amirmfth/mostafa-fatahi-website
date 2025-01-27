"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import HamburgerBtn from "./HamburgerBtn";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSrc =
    windowWidth < 768
      ? "/assets/images/banner-logo-mobile.png"
      : "/assets/images/banner-logo.jpeg";

  return (
    <header className="fixed w-full flex flex-col items-start divide-y-4 divide-dark-brown bg-light-green z-50 ">
      <HamburgerBtn setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Image
        className="h-16 md:h-32 self-center"
        src={imageSrc}
        alt="banner"
        priority
        width={1000}
        height={700}
      />
      <nav className="hidden w-full text-white font-semibold text-xl md:flex">
        {/* Item 1 */}
        <Link
          href={"/"}
          className="w-1/6 border-x-2 border-white bg-light-brown text-center py-3 hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
        >
          صفحه اصلی
        </Link>
        <Link
          href={"/articles"}
          className="w-1/6 border-x-2 border-white bg-light-brown text-center py-3 hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
        >
          مقالات کارشناسی
        </Link>
        <Link
          href={"/info"}
          className="w-1/6 border-x-2 border-white bg-light-brown text-center py-3 hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
        >
          اطلاعات سودمند
        </Link>
        <Link
          href={"questions"}
          className="w-1/6 border-x-2 border-white bg-light-brown text-center py-3 hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
        >
          پرسش و پاسخ
        </Link>
        <Link
          href={"/about-me"}
          className="w-1/6 border-x-2 border-white bg-light-brown text-center py-3 hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
        >
          معرفی کارشناس
        </Link>
        <Link
          href={"/pricing"}
          className="w-1/6 border-x-2 border-white bg-light-brown text-center py-3 hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
        >
          تعرفه کارشناسی
        </Link>
      </nav>
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
}

export default Header;
