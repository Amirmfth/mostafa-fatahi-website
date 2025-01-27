"use client";
import React, { useState } from "react";

function PricingPage() {
  const [pdf, setPdf] = useState("changes");
  return (
    <div
      className="flex pt-16 h-screen md:pt-[182px]  "
      style={{ backgroundImage: "url('/assets/images/banner-bg.png'" }}
    >
      {/* Sidebar */}
      <div className="w-52 flex flex-col h-full font-bold bg-light-green md:w-72 md:text-xl">
        <h2 className="text-2xl text-center  pt-3 pb-10 pr-2">لیست عناوین</h2>
        <div
          onClick={() => setPdf("changes")}
          className="cursor-pointer p-3 text-center "
        >
          ۱-اصلاحیه دستمزد کارشناسان - ۱۴۰۲
        </div>
        <div
          onClick={() => setPdf("wages")}
          className=" cursor-pointer p-3 text-center"
        >
          ۲-جدول تغییرات حق الزحمه - ۱۴۰۲
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        {pdf === "changes" && (
          <iframe
            src="/assets/files/اصلاحیه دستمزد کارشناسان 8-1402.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {pdf === "wages" && (
          <iframe
            src="/assets/files/متن_منقح_شده_تعرفه_حق_الزحمه_کارشناسان_رسمی_دادگست_231112_100248.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default PricingPage;
