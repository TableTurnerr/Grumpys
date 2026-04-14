import ReviewCard from './ReviewCard';
import ThemeButton from './ThemeBtn';
import ReviewPopup from './ReviewPopup';
import { useState } from 'react';

export const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJzxJnVUj4wokRnFpFk0CEIrE";

const Reviews = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleReviewSubmit = (rating: number) => {
        if (rating >= 4) {
            window.open(GOOGLE_REVIEW_URL, '_blank');
        }
    };

    return (
        <div className="relative"
            style={{
                overflow: "hidden",
                minHeight: '644px',
                alignSelf: "stretch",
                borderRadius: "36px",
                background: "var(--primary-dark)",
            }}
        >
            <div className="absolute h-full w-full bg-primary-dark -z-20" />

            <div className='py-[46px] px-[15px] sm:py-[76px] sm:px-[52px]'
                style={{
                    display: 'flex',
                    width: '',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '42px',
                }}
            >
                <div>
                    <div className="text-center text-h2 sm:text-h3 md:text-h2 text-white w-full">
                        What our Customers are Saying
                    </div>
                    <div
                        className="sm:text-normal1 md:text-h5 w-full text-center font-medium mt-[20px]"
                        style={{ color: 'color-mix(in oklab, var(--color-white) 50%, transparent)' }}
                    >
                        Here are some reviews from our <a href='https://maps.app.goo.gl/grumpys-saddle-brook' target='_blank' rel='noopener noreferrer' className='hover:underline'>Google Maps!</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ReviewCard
                        starCount={5}
                        reviewText="Best pizza in Bergen County, hands down. The sourdough crust is incredible -- crispy on the outside, chewy on the inside. The Hot Honey Heaven pizza is absolutely addicting. Will keep coming back!"
                        reviewerName="Michael R."
                        profileImage="https://lh3.googleusercontent.com/a/default-user=s64-c"
                    />

                    <ReviewCard
                        starCount={5}
                        reviewText="Grumpy's is our go-to pizza spot. The sourdough crust sets them apart from every other pizzeria in the area. Generous toppings, amazing sauces, and the staff is always friendly. Try the fried raviolis too!"
                        reviewerName="Sarah K."
                        profileImage="https://lh3.googleusercontent.com/a/default-user=s64-c"
                    />

                    <ReviewCard
                        starCount={5}
                        reviewText="Voted #1 for a reason. We ordered the 32-inch pizza for a party and it was a huge hit. The crust is like nothing else -- that sourdough tang is perfection. Chef Cello really knows what he's doing."
                        reviewerName="David M."
                        profileImage="https://lh3.googleusercontent.com/a/default-user=s64-c"
                    />
                </div>

                <div className='z-10'>
                    <ThemeButton
                        text="Give us a review"
                        textClassname="pr-[8px] pl-[14px]"
                        textColor="text-white"
                        className="bg-[#111] border-[#111] hover:border-[#111] hover:bg-[#111]/90 backdrop-blur-[5.7px]"
                        iconBgColor="bg-primary"
                        iconBgHoverColor="bg-primary-dark"
                        iconColor="text-white"
                        iconHoverColor="text-white"
                        onClick={() => setShowPopup(true)}
                    />
                </div>
                {showPopup && (
                    <ReviewPopup
                        onClose={() => setShowPopup(false)}
                        onSubmit={handleReviewSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default Reviews;
