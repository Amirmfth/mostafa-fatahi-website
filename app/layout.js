"use client";
import Header from "@/components/modules/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "مصطفى فتاحی | کارشناس رسمی دادگستری تهران",
//   description: "مصطفى فتاحي کارشناس رسمی دادگستری تهران",
//   icons: {
//     icon: "/favicon-modified.png",
//   },
//   canonicals: "",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path (useful for setting canonical dynamically)

  // Default canonical URL
  let canonicalUrl = "https://mostafa-fatahi.ir";

  // Conditionally set the canonical URL based on the page path
  if (pathname === "/about-me") {
    canonicalUrl = "https://mostafa-fatahi.ir/about-me";
  } else if (pathname === "/articles") {
    canonicalUrl = "https://mostafa-fatahi.ir/articles";
  } else if (pathname === "/info") {
    canonicalUrl = "https://mostafa-fatahi.ir/info";
  } else if (pathname === "/pricing") {
    canonicalUrl = "https://mostafa-fatahi.ir/pricing";
  } else if (pathname === "/questions") {
    canonicalUrl = "https://mostafa-fatahi.ir/questions";
  } else if (pathname === "/") {
    canonicalUrl = "https://mostafa-fatahi.ir";
  }
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="canonical" href={canonicalUrl} />

        <meta
          name="description"
          content="مصطفى فتاحي کارشناس رسمی دادگستری تهران"
        />
        <meta name="author" content="amir mohammad fatahi" />
        <link
          rel="shortcut icon"
          href="/favicon-modified.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/favicon-modified.png" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
        <title>مصطفى فتاحی | کارشناس رسمی دادگستری تهران</title>
      </head>
      <body className="font-iranyekan">
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
