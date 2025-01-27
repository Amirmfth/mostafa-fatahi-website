import Image from "next/image";
import React from "react";

function AboutMePage() {
  return (
    <div
      className="flex flex-col justify-between pt-16  h-screen font-iranyekan md:pl-40 md:pt-48 md:flex-row  "
      // style={{
      //   backgroundImage: "url('/assets/images/banner-bg.png'",
      // }}
      id="about-me-main"
    >
      
      <div className="flex flex-col space-y-4 mr-10 mt-5 mb-10 md:mt-20 md:pl-40">
        <h2 className="text-3xl font-bold">
          مصطفی فتاحی <br /> کارشناس رسمی راه و ساختمان
        </h2>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">
            شماره پروانه:
          </span>
          ۲۴۰۱۴۱۰۱۰۵
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">اعتبار:</span>
          ۱۴۰۴/۱۲/۲۹
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">
            تاریخ صدور پروانه:
          </span>
          ۱۳۸۴/۰۲/۲۶
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">استان:</span>تهران
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">شهر:</span>شهر
          تهران
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">تلفن موسسه:</span>
          ۰۹۱۸۳۳۱۲۲۴۵
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">تلفن همراه:</span>
          ۰۹۱۲۲۷۵۴۷۱۹
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">
            رشته کارشناسی:
          </span>
          راه و ساختمان
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">
            حوضه صلاحیت جغرافیایی:
          </span>
          کشوری
        </p>
        <p className="text-2xl font-semibold">
          <span className="bg-gray-200 rounded-lg p-1 ml-2 ">ایمیل:</span>
          fatahimostafa47@gmail.com
        </p>
      </div>
      <div className="flex flex-col mx-auto space-y-10 w-fit h-fit md:rotate-45">
        <Image
          src={"/assets/images/card-front.jpg"}
          width={500}
          height={300}
          alt="card-back"
          className="w-[400px]"
        />
        <Image
          src={"/assets/images/card-back.jpg"}
          width={500}
          height={300}
          alt="card-back"
          className="hidden md:block w-[400px] md:translate-x-56"
        />
      </div>
    </div>
  );
}

export default AboutMePage;
