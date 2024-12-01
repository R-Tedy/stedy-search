import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "search app",
  description: "Exploring the search capabilities enabled by using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="min-h-screen bg-black-100 font-poppins"
      >
        {children}
      </body>
    </html>
  );
}
