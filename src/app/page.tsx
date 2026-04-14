"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeBtn";
import Featuring from "@/components/featuring";
import MediaPreloader from "@/components/MediaPreloader";

const InstagramComponent = dynamic(() => import("@/components/InstagramComponent"), { ssr: true });
const Reviews = dynamic(() => import("@/components/Reviews"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/FAQ_section"), { ssr: true });
const LocationComponent = dynamic(() => import("@/components/OurLocation"), { ssr: true });

const Home = React.memo(function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-[10px]">
      <Header onClick={() => { }} />

      <div className="sm:h-[20px]" />

      {/* hero img section */}
      <div id="Home" className="relative h-[600px] w-full overflow-hidden rounded-[36px] sm:h-[580px]">
        <div className="flex h-full flex-col items-start justify-start pt-[40px] sm:pt-0 sm:justify-end gap-2.5 bg-black/15 px-[20px] pb-8 backdrop-blur-[10px] sm:px-[40px]">
          <div className="border-l-3 border-white pl-[20px] text-normal1 text-white sm:text-normal2 sm:font-bold">
            Voted #1 Pizza in Bergen County, NJ
          </div>
          <div className="text-[32px] leading-[1.2] font-semibold text-white sm:text-h2 sm:font-medium lg:text-h1" style={{ fontFamily: 'var(--font-creato-black)' }}>
            Signature Sourdough Pizza,
            <br />
            Subs, Burgers & More
            <br />
            <span className="text-[16px] sm:text-normal2 font-normal text-white/70" style={{ fontFamily: 'var(--font-creato)' }}>
              Saddle Brook, NJ &middot; BYOB Welcome &middot; Dine-In &amp; Delivery
            </span>
          </div>

          {/* Hero Background Image */}
          <MediaPreloader
            src="/Images/hero-img.png"
            alt="Grumpy's Sourdough Pizza Co. - Best Pizza in Saddle Brook NJ"
            className="absolute top-0 left-0 -z-10 h-full w-full rounded-[36px] object-cover"
            onLoaded={() => setHeroLoaded(true)}
          />

          {/* Overlays shown after image loads */}
          {heroLoaded && (
            <>
              <div className="absolute top-0 left-0 -z-9 h-full w-full rounded-[36px] bg-black/10 object-cover" />
              <div
                className="absolute top-0 left-0 -z-9 h-full w-full rounded-[36px] object-cover"
                style={{
                  background: "linear-gradient(59deg, rgb(13 13 13 / 20%) 20%, rgb(13 13 13 / 12%) 40%, rgb(13 13 13 / 8%) 60%, rgba(0, 0, 0, 0) 100%)"
                }}
              />
            </>
          )}
        </div>
      </div>

      <div className="h-[100px]" />

      {/* section 2 */}
      <div id="Menu" className="w-full flex items-center justify-center text-center flex-col">
        <div className="text-h3 sm:text-h2 w-full">
          Try our most popular items
        </div>

        {/* Featuring and Story */}
        <div id="Featuring">
          <Featuring />
        </div>

        <div className="h-[80px]" />
        <div className="text-normal mt-[20px] max-w-[620px] mx-auto" style={{ color: 'var(--tt-color-text-gray)' }}>
          Treat yourself with our signature sourdough pizza that Bergen County can&apos;t stop talking about. Fermented dough, bold toppings, customizable crispness -- from personal pies to our legendary 32-inch pizza. Plus Italian-American subs, burgers, wings, pasta, and same-day catering.
        </div>
        <div className="mt-[20px] gap-[20px] flex flex-col sm:flex-row items-center justify-center">
          <ThemeButton
            text="Get Directions"
            href="https://maps.google.com/?q=Grumpy's+Sourdough+Pizza+Co.+522+Saddle+River+Rd+Saddle+Brook+NJ+07663"
            textClassname="pr-[8px] pl-[14px] text-white"
            className="bg-primary-dark border-2 hover:bg-primary-dark/90 border-primary-dark hover:border-primary-dark/90 transition-colors"
          />

          <ThemeButton
            text="Our Menu"
            textClassname="pr-[8px] pl-[14px]"
            textColor="text-[var(--tt-color-text-gray)]"
            className="bg-transparent border-2 transition-all duration-200 hover:bg-primary-dark hover:text-white border-gray-200 hover:border-primary-dark"
            iconBgColor="bg-gray-100"
            iconBgHoverColor="border-primary-dark"
            iconColor="text-gray-500"
            iconHoverColor="text-white"
            href="https://grumpysnj.com/menu"
          />
        </div>
      </div>

      <div className="h-[100px]" />

      {/* Instagram Section */}
      <InstagramComponent />

      {/* reviews */}
      <div className="h-[100px]" />
      <div id="Reviews">
        <Reviews />
      </div>

      <div className="h-[100px]" />
      {/* FAQ */}
      <div id="FAQ's">
        <FAQSection />
      </div>

      <div className="h-[100px]" />
      {/* OUR LOCATION */}
      <div id="Location">
        <LocationComponent />
      </div>

      <div className="h-[100px]" />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
});

export default Home;
