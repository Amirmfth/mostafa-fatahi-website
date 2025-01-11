import "./globals.css";

export const metadata = {
  title: "مصطفى فتاحی | کارشناس رسمی دادگستری تهران",
  description: "مصطفى فتاحي کارشناس رسمی دادگستری تهران",
  icons: {
    icon: "/favicon-modified.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
