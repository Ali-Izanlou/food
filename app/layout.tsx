import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Context from "@/provider/Context";

const RedHatText = localFont({
  src: [
    {
      path: '../public/fonts/RedHatText-Regular.ttf',
      weight: '400',
      style: 'normal',

    },
    {
      path: '../public/fonts/RedHatText-SemiBold.ttf',
      weight: '600',
      style: 'semiBold',
    },
    {
      path: '../public/fonts/RedHatText-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RedHatText.className} bg-Rose-100` }   >
        <Context>
          {children}
        </Context>
      </body>
    </html>
  );
}
