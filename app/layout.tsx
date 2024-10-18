import "./globals.css";
import Header from "./ui/Header";
import localFont from 'next/font/local'


const fontVaz = localFont({
  src: './fonts/Vazir-Regular-FD-UI.ttf',
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVaz.className} `} >
      <body className="container bg-zinc-800 ">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
