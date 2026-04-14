"use client";

import React from 'react';
import { AnimatedCTAButton } from './CTA_header_btn';
import Image from 'next/image';
import { AnimatedMenuButton } from './Menu_Header_btn';
import { usePathname, useRouter } from 'next/navigation';

function Header({ onClick }: { onClick: () => void }) {

  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const attemptScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (pathname === '/') {
      attemptScroll();
    } else {
      try {
        router.push('/');
      } catch (e) {
        console.warn('router.push failed:', e);
      }
      setTimeout(attemptScroll, 100);
      if (typeof onClick === 'function') {
        onClick();
      }
    }
  };

  return (
    <div className="p-[20px] w-full">
      <div className={`w-full grid grid-cols-2 md:grid-cols-3 items-center`}>
        {/* Left Section */}
        <div className="hidden md:flex justify-start">
          <AnimatedMenuButton
            menuItems={[
              { name: "Menu", onclick: () => { window.open('https://grumpysnj.com/menu', '_blank'); } },
              { name: "Reviews", onclick: () => { scrollToSection('Reviews') } },
              { name: "Featuring", onclick: () => { scrollToSection('Featuring') } },
              { name: "FAQ's", onclick: () => { scrollToSection("FAQ's") } },
              { name: "Location", onclick: () => { scrollToSection('Location') } }
            ]}
          />
        </div>

        {/* Center Section */}
        <div className={`flex justify-start md:justify-center`}>
          <div
            className="relative cursor-pointer"
            onClick={() => { router.push('/'); }}
          >
            <Image
              src="/Images/Logo.jpg"
              alt="Grumpy's Sourdough Pizza Co. Logo"
              width={80}
              height={80}
              className="object-cover rounded-[10px]"
              priority
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-end w-full">
          <AnimatedCTAButton
            buttonLeft={() => { window.location.href = "tel:+12018800555"; }}
            buttonRight={() => { window.open('https://grumpysnj.com/menu', '_blank'); }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header;
