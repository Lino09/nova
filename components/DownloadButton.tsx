"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const DownloadButton = ({ className }: { className: string }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const buttonTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    buttonTimeline
    .to(".pa", { duration: 0.3, '--tw-bg-opacity': 0.6 })
    .to(".granpa", { duration: 0.5, '--tw-bg-opacity': 0.6 })
    .to(".granpa", { duration: 0.3, '--tw-bg-opacity': 0.3 })
    .to(".pa", { duration: 0.5, '--tw-bg-opacity': 0.3 })
  

    return () => {
      buttonTimeline.kill();
    };
  }, []);

  return (
    <a
      ref={textRef}
      href="/CV-IanDeNova.pdf"
      className={`${className} flex items-center justify-center relative `}
      download
    >
      <div className="w-24 h-24 rounded-full bg-cyberpunk-ble flex items-center justify-center granpa absolute z-0 bg-opacity-30"></div>
        <div className="w-20 h-20 rounded-full bg-cyberpunk-ble flex items-center justify-center pa absolute z-10 bg-opacity-50"></div>
        <div className="w-16 h-16 rounded-full bg-cyberpunk-ble flex items-center justify-center flex-col font-extrabold text-lg jr absolute z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        <span>CV</span>
      </div>
    </a>
  );
};

export default DownloadButton;
