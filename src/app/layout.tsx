import type { Metadata } from "next";
import "./globals.scss";
import { Poppins } from 'next/font/google';
    
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "João Medeiros",
  description: "João Medeiros - Fullstack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins}`}>
        {children}
      </body>
    </html>
  );
}
