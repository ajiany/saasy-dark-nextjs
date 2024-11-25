import type { Metadata } from "next";
import localFont from "next/font/local";
import '/public/globals.css';
import '/public/tailwind-build.css';
import Script from 'next/script';

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
  title: "SaaSy Dark",
  description: "Your description here",
  openGraph: {
    title: "Title of the project",
    description: "Your description",
    url: "https://github.com/PaulleDemon",
    images: ["your-image-url"],
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
          integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-black tw-text-white`}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/lib/index.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
