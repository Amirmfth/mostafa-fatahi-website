import Link from "next/link";

function MobileMenu({ openMenu, setOpenMenu }) {
  return (
    <div
      className={`fixed inset-0 z-20 md:hidden ${
        openMenu ? "flex h-screen" : "hidden h-0"
      } flex-col items-center self-end w-full mt-16 px-6 py-20 space-y-2  duration-300`}
      style={{ backgroundImage: "url('/assets/images/banner-bg.png'" }}
    >
      {/* Item 1 */}
      <Link
        href={"/"}
        onClick={() => setOpenMenu((prevState) => !prevState)}
        className="w-full py-5 text-xl bg-purple-200 font-bold text-center hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
      >
        صفحه اصلی
      </Link>
      <Link
        href={"/articles"}
        onClick={() => setOpenMenu((prevState) => !prevState)}
        className="w-full py-5 text-xl bg-purple-200 font-bold text-center hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
      >
        مقالات کارشناسی
      </Link>
      <Link
        href={"/info"}
        onClick={() => setOpenMenu((prevState) => !prevState)}
        className="w-full py-5 text-xl bg-purple-200 font-bold text-center hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
      >
        اطلاعات سودمند
      </Link>
      <Link
        href={"/questions"}
        onClick={() => setOpenMenu((prevState) => !prevState)}
        className="w-full py-5 text-xl bg-purple-200 font-bold text-center hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
      >
        پرسش و پاسخ
      </Link>
      <Link
        href={"/about-me"}
        onClick={() => setOpenMenu((prevState) => !prevState)}
        className="w-full py-5 text-xl bg-purple-200 font-bold text-center hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
      >
        معرفی کارشناس
      </Link>
      <Link
        href={"/pricing"}
        onClick={() => setOpenMenu((prevState) => !prevState)}
        className="w-full py-5 text-xl bg-purple-200 font-bold text-center hover:scale-105 hover:text-dark-brown duration-100 cursor-pointer"
      >
        تعرفه کارشناسی
      </Link>
    </div>
  );
}

export default MobileMenu;
