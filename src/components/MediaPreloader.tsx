import React, { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

interface MediaPreloaderProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: string | number;
  children?: React.ReactNode;
  onLoaded?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const MediaPreloader: React.FC<MediaPreloaderProps> = ({
  src,
  alt = "",
  type = "image",
  className = "",
  style = {},
  borderRadius = '12px',
  children,
  onLoaded,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [forcePreloader, setForcePreloader] = useState(
    typeof window !== "undefined" && window.__FORCE_PRELOADERS__
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setForcePreloader(window.__FORCE_PRELOADERS__);
    window.addEventListener("forcepreloaders-toggle", handler);
    return () => window.removeEventListener("forcepreloaders-toggle", handler);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    let value = window.__FORCE_PRELOADERS__;
    Object.defineProperty(window, "__FORCE_PRELOADERS__", {
      configurable: true,
      get: () => value,
      set: (v) => {
        value = v;
        window.dispatchEvent(new Event("forcepreloaders-toggle"));
      },
    });
  }, []);

  const [error, setError] = useState(false);

  const handleLoaded = () => {
    if (!loaded) {
      setLoaded(true);
      if (onLoaded) onLoaded();
    }
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (forcePreloader) return;
    if (type === "video" && videoRef.current) {
      if (videoRef.current.readyState >= 3 && !loaded) {
        setLoaded(true);
        if (onLoaded) onLoaded();
      }
    }
  }, [src, type, onLoaded, loaded, forcePreloader]);

  React.useEffect(() => {
    if (type === "video" && videoRef.current) {
      if (muted) {
        videoRef.current.muted = true;
        videoRef.current.setAttribute("muted", "");
      }
      if (playsInline) {
        videoRef.current.setAttribute("playsinline", "");
      }
      if (autoPlay) {
        videoRef.current.play().catch((e) => {
          console.warn("Autoplay failed:", e);
        });
      }
    }
  }, [type, muted, playsInline, autoPlay]);

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`} style={{ ...style, borderRadius }}>
      {type === "image" ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ borderRadius }}
          onLoad={handleLoaded}
          onError={handleError}
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ borderRadius }}
          onLoadedData={handleLoaded}
          onError={handleError}
        >
          {children}
        </video>
      )}
      {error && (
        <div className="absolute inset-0 z-10" style={{ borderRadius, overflow: "hidden" }}>
          <ImagePlaceholder />
        </div>
      )}
      {(!loaded || forcePreloader) && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-10" style={{ borderRadius }}>
          <div className="absolute inset-0 bg-[#e0e0e0] w-full h-full" style={{ borderRadius }} />
          <div className="lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPreloader;
