"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GlitchText({children, className}:{children: string, className: string}) {
  const textRef = useRef(null);

  useEffect(() => {
  

    const glitchTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay:  Math.floor(Math.random() *6) + 1
    });

    glitchTimeline.to('.glitch', {duration: 0.1, skewX: '60',  ease: "power4.inOut"})
    .to('.glitch', {duration: 0.05, skewX: '0' })
    .to('.glitch', {duration: 0.04, opacity:0})
    .to('.glitch', {duration: 0.04, opacity:1})
    .to('.glitch', {duration: 0.04, x:-20})
    .to('.glitch', {duration: 0.04, x:0})
    .add("split", 0)
    .to('.top', {duration: 0.5, x:-10,ease: 'Power4.easeInOut'},'split')
    .to('.top', {duration: 0.5, x:0,ease: 'Power4.easeInOut'},'split')
    .to('.top', {duration: 0.5, x:0,ease: 'Power4.easeInOut'},'split')
    .to('.bottom', {duration: 0.5, x:0,ease: 'Power4.easeInOut'},'split')
    .to('.glitch', {duration: 0.08,  'text-shadow': '-2px 0 red'},'split')
    .to('#txt', {duration: 0,  scale:1.1},'split')
    .to('#txt', {duration: 0,  scale:1}, "+=0.02")
    .to('.glitch', {duration: 0.08, 'text-shadow': 'none'}, "+=0.09")
    .to('.glitch', {duration: 0.03, 'text-shadow': '-3px 0 green'},'split')
    .to('.glitch', {duration: 0.03, 'text-shadow': 'none'},"+=0.1")
    .to('.top', {duration: 0.2, x:0,ease: 'Power4.easeInOut'})
    .to('.bottom', {duration: 0.2, x:0,ease: 'Power4.easeInOut'})
    .to('.glitch', {duration: 0.02, scaleY:1.1,ease: 'Power4.easeInOut'})
    .to('.glitch', {duration: 0.04, scaleY:1,ease: 'Power4.easeInOut'})
  


    return () => {
      glitchTimeline.kill();
    };
  }, []);

  return (
  <h1 ref={textRef} className={`txt relative ${className}`} >
    <span className='top glitch absolute'>
      {children}
    </span>
    <span className='bottom glitch absolute'>
      {children}
    </span>
    <span className='invisible'>
      {children}
    </span>
  </h1>
  );
}
