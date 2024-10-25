import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SecurityFa.st",
  description: "Ship even faster. The fastest security boilerplate.",
  openGraph: {
    title: "SecurityFa.st",
    description: "Ship even faster. The fastest security boilerplate.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="bb747fdd-a33f-4d6f-9dd6-bad3c2d6c610"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gradient-to-b from-gray-100 to-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
