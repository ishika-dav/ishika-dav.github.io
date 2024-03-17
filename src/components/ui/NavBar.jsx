import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { Icon } from "@iconify/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),
        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header ref={navBar} className="fixed top-0 z-50 w-full bg-secondary-100 px-5 py-3 flex justify-end items-center">
      <nav className="flex items-center space-x-4 text-body-3">
        <a href="#about" className="hidden md:flex items-center space-x-2">
          <span>about</span>
        </a>
        <a href="#works" className="hidden md:flex items-center space-x-2">
          <span>projects</span>
        </a>
        <a href="https://github.com/ishika-dav" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <Icon icon="mdi:github" className="text-2xl text-secondary-600" />
        </a>
        <a href="https://www.linkedin.com/in/ishika-dav-b03679136/" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <Icon icon="mdi:linkedin" className="text-2xl text-secondary-600" />
        </a>
        <a href="mailto:ishikadav03@gmail.com" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <Icon icon="mdi:gmail" className="text-2xl text-secondary-600" />
        </a>
      </nav>
    </header>
  );
}
