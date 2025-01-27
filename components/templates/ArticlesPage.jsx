"use client";
import React, { useState } from "react";

function ArticlesPage() {
  const [pdf, setPdf] = useState("article1");
  return (
    <div
      className="flex pt-16 min-h-screen md:pt-[182px]  "
      style={{ backgroundImage: "url('/assets/images/banner-bg.png'" }}
    >
      {/* Sidebar */}
      <div className="w-52 flex flex-col h-full font-bold bg-light-green md:w-72 md:text-xl">
        <h2 className="text-2xl text-center  pt-3 pb-10 pr-2">لیست عناوین</h2>
        <div
          onClick={() => setPdf("article1")}
          className="cursor-pointer p-3 text-center "
        >
          کنکاشی درحل اختلاف پیمانکاری
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        {pdf === "article1" && (
          <iframe
            src="/assets/files/کنکاشی درحل اختلاف پیمانکاری.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default ArticlesPage;
