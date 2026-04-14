import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TabTitleHandler from "@/components/TabTitleHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grumpysnj.com"),
  title: "Grumpy's Sourdough Pizza Co. | #1 Pizza in Bergen County, NJ",
  description: "Voted #1 Pizza in Bergen County. Signature sourdough crust pizza with customizable crispness, Italian-American subs, burgers, wings, pasta & same-day catering. BYOB welcome. Saddle Brook, NJ. Order online or call (201) 880-0555.",
  keywords: [
    "Grumpy's Sourdough Pizza", "best pizza Saddle Brook NJ", "pizza delivery Bergen County",
    "sourdough pizza NJ", "best pizza Bergen County NJ", "BYOB pizza NJ",
    "pizza Saddle Brook", "32 inch pizza NJ", "hot honey pizza NJ",
    "Italian-American subs", "pizza catering Bergen County", "sourdough crust pizza",
    "pizza delivery Saddle Brook NJ", "best sourdough pizza New Jersey",
    "BYOB restaurant Bergen County NJ", "pizza near me Saddle Brook",
    "wings Saddle Brook NJ", "burgers Saddle Brook NJ", "pizza challenge NJ",
    "Grumpy's Pizza Co", "grumpysnj"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Grumpy's Sourdough Pizza Co. | #1 Pizza in Bergen County, NJ",
    description: "Voted #1 Pizza in Bergen County. Signature sourdough pizza, subs, burgers, wings, pasta & catering. BYOB welcome. 522 Saddle River Rd, Saddle Brook, NJ.",
    url: "https://grumpysnj.com/",
    siteName: "Grumpy's Sourdough Pizza Co.",
    images: [
      {
        url: "/Images/Logo.jpg",
        width: 400,
        height: 400,
        alt: "Grumpy's Sourdough Pizza Co. Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://grumpysnj.com/",
    title: "Grumpy's Sourdough Pizza Co. | #1 Pizza in Bergen County, NJ",
    description: "Voted #1 Pizza in Bergen County. Signature sourdough pizza, subs, burgers, wings, pasta & catering. BYOB welcome. 522 Saddle River Rd, Saddle Brook, NJ.",
    images: ["/Images/Logo.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C41E24" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Grumpy's Sourdough Pizza Co.",
              "image": "https://grumpysnj.com/Images/Logo.jpg",
              "url": "https://grumpysnj.com",
              "telephone": "(201) 880-0555",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "522 Saddle River Road",
                "addressLocality": "Saddle Brook",
                "addressRegion": "NJ",
                "postalCode": "07663",
                "addressCountry": "US"
              },
              "servesCuisine": ["Sourdough Pizza", "Italian-American", "Subs", "Burgers"],
              "priceRange": "$$",
              "openingHours": ["Tu-Su 10:00-22:00"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1100"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabTitleHandler />
        {children}
      </body>
    </html>
  );
}
