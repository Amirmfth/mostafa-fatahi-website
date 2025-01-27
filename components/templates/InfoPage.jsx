"use client";

import React, { useState } from "react";

function InfoPage() {
  const [pdf, setPdf] = useState("faq1");
  return (
    <div
      className="flex pt-16 md:pt-[182px] min-h-screen  "
      style={{
        backgroundImage: "url('/assets/images/banner-bg.png'",
      }}
    >
      {/* Sidebar */}
      <div className="w-52 flex flex-col h-full font-bold bg-light-green md:w-72 md:text-xl">
        <h2 className="text-2xl text-center  pt-3 pb-10 pr-2">لیست عناوین</h2>
        <div
          onClick={() => setPdf("faq1")}
          className="cursor-pointer p-3 text-center "
        >
          پرسش و پاسخ شرایط عمومی پیمان 1
        </div>
        <div
          onClick={() => setPdf("faq2")}
          className=" cursor-pointer p-3 text-center"
        >
          پرسش و پاسخ شرایط عمومی پیمان 2
        </div>
        <div
          onClick={() => setPdf("faq3")}
          className=" cursor-pointer p-3 text-center"
        >
          پرسش و پاسخ شرایط عمومی پیمان 3
        </div>
        <div
          onClick={() => setPdf("faq4")}
          className=" cursor-pointer p-3 text-center"
        >
          پرسش و پاسخ شرایط عمومی پیمان 4
        </div>
        <div
          onClick={() => setPdf("faq5")}
          className=" cursor-pointer p-3 text-center"
        >
          پرسش و پاسخ قانون مناقصات 1
        </div>
        <div
          onClick={() => setPdf("faq6")}
          className=" cursor-pointer p-3 text-center"
        >
          پرسش و پاسخ قانون مناقصات 2
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        {pdf === "faq1" && (
          <iframe
            src="/assets/files/پرسش و پاسخ شرایط عمومی پیمان 2.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {pdf === "faq2" && (
          <iframe
            src="/assets/files/پرسش و پاسخ شرایط عمومی پیمان 3.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {pdf === "faq3" && (
          <iframe
            src="/assets/files/پرسش و پاسخ شرایط عمومی پیمان 4 .pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {pdf === "faq4" && (
          <iframe
            src="/assets/files/پرسش و پاسخ شرایط عمومی پیمان 5.PDF"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {pdf === "faq5" && (
          <iframe
            src="/assets/files/پرسش و پاسخ قانون مناقصات 1.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
        {pdf === "faq6" && (
          <iframe
            src="/assets/files/پرسش و پاسخ قانون مناقصات 2.pdf"
            width="100%"
            height="100%"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default InfoPage;
