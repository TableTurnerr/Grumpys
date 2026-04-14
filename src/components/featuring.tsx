"use client";

import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import MediaPreloader from './MediaPreloader';

type FeaturedDishSectionProps = {
  imageSrc: string | string[];
  alt: string;
  title: string;
  description: string | ReactNode;
  imagePriority?: boolean;
  reverse?: boolean;
  imageClass?: string;
  containerClass?: string;
  textClass?: string;
  transitionInterval?: number;
};

const FeaturedDishSection: React.FC<FeaturedDishSectionProps> = ({
  imageSrc,
  alt,
  title,
  description,
  imagePriority = false,
  reverse = false,
  imageClass = '',
  containerClass = '',
  textClass = '',
  transitionInterval = 4000,
}) => {
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    if (images.length <= 1) return;
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 700);
  }, [images.length, currentIndex]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(nextImage, transitionInterval);
    return () => clearInterval(interval);
  }, [images.length, transitionInterval, nextImage]);

  const getSlideStyle = (index: number): React.CSSProperties => {
    if (index === currentIndex) {
      return { transform: 'translateX(0)', opacity: 1, zIndex: 2 };
    }
    if (index === prevIndex && isTransitioning) {
      return { transform: 'translateX(-100%)', opacity: 1, zIndex: 1 };
    }
    return { transform: 'translateX(100%)', opacity: 0, zIndex: 0 };
  };

  return (
    <div className={`mt-16 md:mt-[100px] px-4 lg:px-[80px] ${containerClass}`}>
      <div className={`mx-auto w-full max-w-[1240px] flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0${reverse ? ' lg:flex-row-reverse' : ''}`}>
        <div className={`relative aspect-square max-w-[540px] max-h-[540px] block w-[90%] h-auto lg:w-[400px] lg:h-[400px] xl:w-[540px] xl:h-[540px] shrink-0 rounded-[24px] overflow-hidden ${imageClass}`}>
          {images.map((src, index) => (
            <div
              key={src}
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={getSlideStyle(index)}
            >
              <MediaPreloader
                src={src}
                alt={`${alt} ${index + 1}`}
                borderRadius="24px"
                className="w-full h-full object-cover"
              />
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                width={540}
                height={540}
                priority={imagePriority && index === 0}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          ))}
        </div>
        <div className={`flex w-full lg:w-fit max-w-[560px] flex-col items-center lg:items-start gap-0 md:gap-[20px] mt-0 lg:mt-0 mb-6 lg:mb-0 lg:pl-8 ${textClass}`}>
          <div className="self-stretch text-h3 xl:text-h2 text-center lg:text-left mb-0 -mt-2">
            {title}
          </div>
          <div className="text-normal4 md:text-normal3 text-[var(--tt-color-text-gray)] text-center lg:text-left">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

function Featuring() {
  return (
    <div className='w-full'>
      {/* Signature Sourdough Pizzas */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/menu/7920a239-aee6-4ac9-b67f-4add9b112d85.jpg",
          "/Images/menu/7a3e676f-1688-4f3e-a073-99869cfab3bc.jpg",
          "/Images/menu/01e40dd6-4ed9-4d72-9ee9-006446b95240.jpg",
        ]}
        alt="Sourdough Pizza Saddle Brook NJ"
        title="Signature Sourdough Pizzas"
        description={
          <>
            Our signature sourdough crust delivers the perfect tang, crispiness, and chewy interior that earned us the <strong>#1 Pizza in Bergen County</strong> title. Every pie starts with dough fermented for maximum flavor -- choose your crispness level from soft and chewy to extra crispy.
            <br /><br />
            Available in 10&quot; personal, 16&quot; large thin crust, and square pizzas -- including our famous <strong>Hot Honey Heaven</strong>, <strong>Drunken Grandma</strong>, <strong>Mushroom Truffle</strong>, <strong>Grumpy&apos;s Triple Threat</strong>, <strong>Double-Double Pepperoni</strong>, <strong>Drunk Chicken Parm</strong>, and over 25 specialty pies.
            <br /><br />
            <a className="font-bold cursor-pointer text-primary-dark hover:underline" href="https://grumpysnj.com/menu" target="_blank" rel="noopener noreferrer">View our full pizza menu &rarr;</a>
          </>
        }
        reverse={false}
      />

      {/* Munchies, Wings & Things */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/menu/3063cbef-2727-4e6d-8d52-47d8a3547864.jpg",
          "/Images/menu/b12d794f-e917-4add-b71a-28bb14b2875f.jpg",
          "/Images/menu/b212b812-ca83-4ad9-b1cd-3afec369bb52.jpg",
        ]}
        alt="Wings and Appetizers Saddle Brook"
        title="Munchies, Wings & Things!"
        description={
          <>
            Start your meal with our crowd-favorite appetizers. From crispy <strong>bone-in and boneless wings</strong> tossed in your choice of signature sauces, to <strong>homemade meatballs</strong>, <strong>mozzarella sticks</strong>, <strong>sourdough garlic knots</strong>, and a fresh <strong>burrata caprese salad</strong>.
            <br /><br />
            Every starter is made fresh and pairs perfectly with our sourdough pizzas. Don&apos;t miss our house-made <strong>dipping sauces</strong> -- including basil pesto, ranch, blue cheese, and Mike&apos;s Hot Honey.
            <br /><br />
            <a className="font-bold cursor-pointer text-primary-dark hover:underline" href="https://grumpysnj.com/menu" target="_blank" rel="noopener noreferrer">See all appetizers &rarr;</a>
          </>
        }
        imagePriority={true}
        reverse={true}
      />

      {/* Sourdough Subs & Wraps + Burgers */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/menu/286678d4-df3d-4e23-98fa-1c83e6683cad.jpg",
          "/Images/menu/0d25912b-1b10-41e7-8364-56f89c7a43d2.jpg",
          "/Images/menu/071efe58-01d8-4e28-b2cd-d09c5e5ce079.jpg",
        ]}
        alt="Sourdough Subs and Burgers Saddle Brook NJ"
        title="Sourdough Subs, Wraps & Burgers"
        description={
          <>
            Italian-American subs made fresh to order on our signature sourdough bread. Choose from our <strong>Italian Sub</strong>, <strong>Meatball Parm</strong>, <strong>Milanese</strong>, <strong>Buffalo Chicken</strong>, <strong>Cheesesteak</strong>, and <strong>Grumpy&apos;s Chicken Sandwich</strong> -- plus wraps including <strong>Chicken Bacon Ranch</strong> and <strong>Buffalo Chicken Wrap</strong>.
            <br /><br />
            Craving a burger? Try our <strong>Big Boy Burger</strong> or our <strong>Signature Sliders</strong> -- Buffalo Chicken, Cheeseburger, Chicken Caesar, and Meatball Parm sliders.
            <br /><br />
            <a className="font-bold cursor-pointer text-primary-dark hover:underline" href="https://grumpysnj.com/menu" target="_blank" rel="noopener noreferrer">View subs, wraps & burgers &rarr;</a>
          </>
        }
        imagePriority={true}
        reverse={false}
      />

      {/* Pasta, Salads & Dinners */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/menu/96ad93c3-d148-4f49-a2c4-6209a1eb4836.jpg",
          "/Images/menu/5c33144c-b203-44bf-9c23-eeef2a0ed927.jpg",
          "/Images/menu/1448d0e4-9ed7-411e-a512-3341503e33bd.jpg",
        ]}
        alt="Pasta and Salads Bergen County"
        title="Pasta, Salads & Dinners"
        description={
          <>
            Fresh pasta made with care -- try our <strong>Penne alla Vodka</strong> or classic <strong>Spaghetti &amp; Meatballs</strong>, available in tiny, personal, and family-style trays. Perfect for a quick dinner for one or feeding the whole crew.
            <br /><br />
            Our <strong>Supreme Salads</strong> include Antipasto, Caesar, Garden, Arugula Pear, Spinach Fig, and Burrata Caprese -- available in half and full sizes. Plus <strong>Dinners for 1 &amp; 2</strong> with your choice of proteins and sides.
            <br /><br />
            <a className="font-bold cursor-pointer text-primary-dark hover:underline" href="https://grumpysnj.com/menu" target="_blank" rel="noopener noreferrer">See pasta, salads & dinner options &rarr;</a>
          </>
        }
        imagePriority={true}
        reverse={true}
      />

      {/* Desserts & The 32-Inch Challenge */}
      <FeaturedDishSection
        imageSrc={[
          "/Images/menu/1a0a20c2-f37c-45bb-9877-99c944e586ff.jpg",
          "/Images/menu/f6f05281-9603-46b2-ae97-41a81f85233f.jpg",
          "/Images/menu/a42d4151-b961-49a0-9bbe-7b40b44bd44e.jpg",
        ]}
        alt="Desserts and 32-Inch Pizza Challenge NJ"
        title="Desserts & The 32-Inch Challenge"
        description={
          <>
            Finish with our fan-favorite desserts -- <strong>Fried Oreos</strong>, <strong>S&apos;mores Raviolis</strong>, and <strong>Lil&apos; Cannolis</strong>. The perfect sweet finish to your Grumpy&apos;s meal.
            <br /><br />
            Think you can handle it? Take on our famous <strong>32-inch pizza challenge</strong>. Our massive sourdough pizza is loaded with toppings and built for those with a serious appetite. Perfect for parties, game day, or just showing off.
            <br /><br />
            We also offer <strong>same-day catering</strong> with wings, subs, pasta trays, salads, meatballs, and more -- ideal for offices, events, and large groups in Bergen County.
            <br /><br />
            <a className="font-bold cursor-pointer text-primary-dark hover:underline" href="https://grumpysnj.com/menu" target="_blank" rel="noopener noreferrer">Order online or call (201) 880-0555 &rarr;</a>
          </>
        }
        imagePriority={true}
        reverse={false}
      />
    </div>
  );
}

export default Featuring;
