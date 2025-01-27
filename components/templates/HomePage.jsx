import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div
      className="flex flex-col pt-16 h-screen md:pt-48 md:flex-row  "
      style={{ backgroundImage: "url('/assets/images/banner-bg.png'" }}
    >
      <Image
        src={"/assets/images/profile-image.jpg"}
        height={1000}
        width={700}
        alt="profile"
        className="w-72 mx-auto md:w-[480px] md:ml-20 md:mx-0 h-fit"
      />
      <div className="flex flex-col p-2 items-start font-iranyekan mt-10 max-h-[600px] overflow-y-scroll scrollbar-custom  ">
        <h2 className="text-2xl font-bold mb-6">صالحیت های کارشناسی</h2>
        <ul className="text-xl font-semibold space-y-5 list-disc max-w-3xl ">
          <li>تامین دلیل، تبیین وضعیت ابنیه، ساختمانها و طرحهای عمرانی</li>
          <li>تعیین پیشرفت فیزیکی ابنیه، ساختمانها و طرحهای عمرانی</li>
          <li>
            تشخیص حسن انجام کارهای ساختمانی و طرح های عمرانی به لحاظ فنی و
            اجرایی
          </li>
          <li>
            ارزیابی ساختمان های مسکونی و تعیین و تعدیل اجاره بها و اجرت المثل آن
          </li>
          <li>اتجدید رزیابی مستحدثات شرکتها وکارخانه جات صنعتی </li>
          <li>
            متره و برآورد، برآورد هزینه ها و تعیین اجرت المثل کارهای ساختمانی و
            طرح های عمرانی
          </li>
          <li>
            بررسی و اظهار نظر در امور و مقررات شهرسازی و طرح‌های جامع، تفصیلی و
            هادی
          </li>
          <li>تعیین علت و برآورد میزان خسارت وارده در اثر سوانح طبیعی</li>
          <li>
            ارزیابی اراضی و تعدیل و تعیین اجاره بها و اجرت المثل آن (به استثنای
            بخشی از اراضی کشاورزی و منابع طبیعی فاقد مستحدثات ساختمانی)
          </li>
          <li>
            ارزیابی انواع ساختمان ها و دارایی های نامشهود متعلق به ان با هرنوع
            کاربری و تعیین و تعدیل اجاره بها و اجرت المثل
          </li>
          <li>
            ارزیابی ملکیت، سرقفلی، حق کسب و پیشه و تجارت و تعیین و تعدیل اجاره
            بها و اجرت المثل
          </li>
          <li>
            رسیدگی به اختلافات کارفرما و مشاور و پیمانکار در امور تخصصی مربوط به
            راه و ساختمان انواع پیمان های بخش دولتی و مشمول ضوابط و مقررات
            سازمان برنامه و بودجه
          </li>
          <li>
            رسیدگی به اختلافات کارفرما و مشاور و پیمانکار در امور تخصصی مربوط به
            راه و ساختمان انواع پیمان های بخش خصوصی، تعاونی و غیردولتی
          </li>
          <li>
            رسیدگی به اختلافات قراردادهای مشارکت در ساخت , خرید ملک و پیش فروش
          </li>
          <li>
            مشاوره فنی در زمینه کلیم های متداول پیمانکاری به کارفرمایان ,
            مشاوران و پیمانکاران
          </li>
          <li>
            تفسیر عکس‌های هوایی از نظر ساختمانی و پیاده کردن پلاک ثبتی بر روی
            زمین و نقشه
          </li>
          <li>امور مربوط به راه‌ها و باندهای فرودگاهی و دسترسی‌های شهری</li>
          <li>تشخیص اراضی دایر، بایر و موات از نظر ساختمانی</li>
          <li>تعیین قدمت ابنیه، ساختمان ها و انواع سازه ها</li>
          <li>تعدیل و تعیین اجاره بها و اجرت‌المثل اجاره بها</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
