import React, { useState, useEffect } from "react";
import InstagramGrid from "./InstagramGrid";
import InstagramCarousel from "./InstagramCarousel";

interface InstagramPost {
	id: string;
	title: string;
	image: string;
	url: string;
	description?: string | string[];
}

const InstagramFeed: React.FC<{ posts: InstagramPost[] }> = ({ posts }) => {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1200,
	);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div>
			<div className="lg:container mx-auto px-4">
				<h1 className="text-h3 sm:text-h2 w-full text-center mb-[20px]">
					Instagram Feed
				</h1>
				{windowWidth > 650 ? (
					<InstagramGrid posts={posts} />
				) : (
					<InstagramCarousel posts={posts} />
				)}
			</div>
		</div>
	);
};

const InstagramComponent = () => {
	const Posts: InstagramPost[] = [
		{
			id: "1",
			title: "grumpysnj",
			image: "/Images/menu/Grump_SourdoughpPizza.JPEG",
			url: "https://www.instagram.com/grumpysnj/",
			description: "Voted #1 Pizza in Bergen County! Our signature sourdough crust with its perfect tang and crispy chewy texture. Come taste what everyone's talking about!",
		},
		{
			id: "2",
			title: "grumpysnj",
			image: "/Images/menu/f257d3c5-cb15-407f-8537-acc39347dc23.jpg",
			url: "https://www.instagram.com/grumpysnj/",
			description: "Hot Honey Heaven -- sweet heat meets sourdough perfection. Drizzled with hot honey over mozzarella, pepperoni, and fresh basil.",
		},
		{
			id: "3",
			title: "grumpysnj",
			image: "/Images/menu/f410ce04-fe59-4752-9537-f156419b9824.jpg",
			url: "https://www.instagram.com/grumpysnj/",
			description: "Our famous 32-inch pizza challenge! Think you can handle it? Come test your appetite at Grumpy's in Saddle Brook.",
		},
		{
			id: "4",
			title: "grumpysnj",
			image: "/Images/menu/e532ede2-1c2a-4f6b-a0c9-678da2c0890a.jpg",
			url: "https://www.instagram.com/grumpysnj/",
			description: "Fresh out the oven -- our specialty sourdough pies with generous toppings and housemade sauces.",
		},
		{
			id: "5",
			title: "grumpysnj",
			image: "/Images/menu/d4426ce1-0fc9-4407-9ede-4ff24a1667f3.jpg",
			url: "https://www.instagram.com/grumpysnj/",
			description: "Crispy wings, sourdough garlic knots, and fried Oreos -- our appetizers are just as legendary as our pizzas!",
		},
		{
			id: "6",
			title: "grumpysnj",
			image: "/Images/menu/ca2273f3-1fb0-49a0-abb0-9ad7d6c9d9dc.jpg",
			url: "https://www.instagram.com/grumpysnj/",
			description: "NOT YOUR TRADITIONAL PIZZA SPOT. Sourdough pizza & subs in Saddle Brook, NJ. Order online at grumpysnj.com!",
		},
	];

	return <InstagramFeed posts={Posts} />;
};

export default InstagramComponent;
