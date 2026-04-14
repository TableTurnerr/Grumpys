import FAQ from './FAQ';

const FAQSection = () => {
  const faqItems = [
    {
      question: "Where is Grumpy's Sourdough Pizza Co. located?",
      answer: "We are located at 522 Saddle River Road, Saddle Brook, NJ 07663. We're just off the main corridor, with easy access from Lodi, Garfield, Elmwood Park, Rochelle Park, Fair Lawn, Paramus, and Maywood. Street parking is available right outside."
    },
    {
      question: "What are your hours?",
      answer: "We are open Tuesday through Sunday from 10:00 AM to 10:00 PM. We are closed on Mondays."
    },
    {
      question: "Can I order delivery in Saddle Brook and Bergen County?",
      answer: "Absolutely! You can order online through our website at grumpysnj.com, or through DoorDash, Uber Eats, Grubhub, and Slice. We deliver throughout Saddle Brook and surrounding Bergen County towns. You can also call us at (201) 880-0555 for pickup orders."
    },
    {
      question: "What makes your sourdough pizza different?",
      answer: "Our signature sourdough crust is fermented for a perfect tang, crispiness, and chewy interior you won't find at any other pizza spot in NJ. Chef Cello (Marcelo Segura) brings a Peruvian-influenced Italian cooking style with bold flavors and quality ingredients. You can even customize the crispness level -- from soft and chewy to extra crispy. That's what earned us the #1 Pizza in Bergen County title with 4.8 stars on Google from over 1,100 reviews."
    },
    {
      question: "What's on your menu besides pizza?",
      answer: "We have a full menu! Sourdough subs & wraps (Italian, Meatball Parm, Milanese, Buffalo Chicken, Cheesesteak), burgers (Big Boy Burger, Signature Sliders), wings (bone-in & boneless), pasta (Penne alla Vodka, Spaghetti & Meatballs), supreme salads, appetizers (mozzarella sticks, sourdough garlic knots, homemade meatballs, burrata caprese), desserts (Fried Oreos, S'mores Raviolis, Lil' Cannolis), and a Lil' Grumpy's kids menu."
    },
    {
      question: "Is Grumpy's a BYOB restaurant?",
      answer: "Yes! We are a BYOB restaurant -- bring your own wine, beer, or any beverage to enjoy with your meal. No corkage fee. It's one of the things that makes us a great date-night or group-dinner spot in Saddle Brook."
    },
    {
      question: "What's the 32-inch pizza challenge?",
      answer: "Our famous 32-inch pizza is one of the biggest pies in NJ. It's loaded with toppings on our signature sourdough crust -- perfect for parties, game day, or anyone with a serious appetite. Call us at (201) 880-0555 for details!"
    },
    {
      question: "Do you offer same-day catering in Bergen County?",
      answer: "Yes! We offer same-day catering with wings, subs, wraps, pasta trays (Penne alla Vodka, Spaghetti & Meatballs), salads, meatballs, eggplant, chicken, and more. Perfect for offices, events, parties, and large groups in Bergen County. Call (201) 880-0555 to order."
    },
    {
      question: "What are your most popular items?",
      answer: "Our signature sourdough pizzas are the star -- especially the Hot Honey Heaven, Drunken Grandma, Mushroom Truffle, Grumpy's Triple Threat, and Spinach & Artichoke Dip Pizza. Wings and the sourdough garlic knots are hugely popular starters. For dessert, Fried Oreos are a crowd favorite."
    },
    {
      question: "Do you accept credit cards?",
      answer: "Yes, we accept all major credit and debit cards both in-store and through our online ordering system."
    },
    {
      question: "Is there parking at Grumpy's?",
      answer: "Yes, street parking is available on Saddle River Road right outside our location at 522 Saddle River Rd, Saddle Brook, NJ 07663."
    },
    {
      question: "Do you take reservations?",
      answer: "We operate first-come, first-served. We have approximately 24 seats indoors and seasonal outdoor seating. For large groups, we recommend calling ahead at (201) 880-0555."
    }
  ];

  return (
    <div>
      <FAQ faqItems={faqItems} />
    </div>
  );
};

export default FAQSection;
