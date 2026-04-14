import React from "react";

const ImagePlaceholder: React.FC<{ className?: string }> = ({ className = "" }) => (
	<div
		className={`w-full h-full flex items-center justify-center ${className}`}
		style={{
			background: "radial-gradient(ellipse at center, #d4191f 0%, #9B1B20 60%, #7a1419 100%)",
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			viewBox="0 0 24 24"
			fill="none"
			stroke="rgba(255,255,255,0.35)"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<circle cx="8.5" cy="8.5" r="1.5" />
			<polyline points="21 15 16 10 5 21" />
		</svg>
	</div>
);

export default ImagePlaceholder;
