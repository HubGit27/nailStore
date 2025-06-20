// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Load the Inter font with specific weights
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aura Nails & Spa | Your Sanctuary of Style", //Brandon fix later to optimize seo
  description: "Discover tranquility and elegance at Aura Nails & Spa. We offer premium manicure, pedicure, and nail art services in a serene and luxurious environment. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This script adds the JSON-LD structured data for Local SEO.
          It tells Google about your business name, address, hours, etc.
          This is the implementation of the instruction from the SEO guide.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NailSalon",
            "name": "Aura Nails & Spa",
            "image": "https://images.unsplash.com/photo-1604654894610-df694d318325?q=80&w=2940&auto=format&fit=crop",
            "@id": "https://www.auranails.com", // Replace with your actual domain
            "url": "https://www.auranails.com",  // And here
            "telephone": "+1-240-555-0123",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Luxury Lane",
              "addressLocality": "Ballenger Creek",
              "addressRegion": "MD",
              "postalCode": "21703",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.3879,
              "longitude": -77.4850
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday"],
                "opens": "00:00",
                "closes": "00:00" // Indicates closed
              }
            ],
            "sameAs": [
              "https://www.facebook.com/auranails", // Replace with your actual social media links
              "https://www.instagram.com/auranails"
            ] 
          }) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-cream text-charcoal`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}