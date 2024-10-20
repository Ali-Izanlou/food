import "./globals.css";
import ProductProvider from "./lib/context/Provider";
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
        <ProductProvider>
          <Header />
          <main className="flex flex-col  items-center ">
            {children}
          </main>
        </ProductProvider>
      </body>
    </html>
  );
}
