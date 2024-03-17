import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null)
  const body = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",

      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section id="contact" className="my-[10%] overflow-hidden" aria-label="contact me">
      <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
      <div className="flex flex-wrap justify-start items-center gap-x-4 gap-y-8 text-accent-300">
        <a
          href="https://github.com/ishika-dav"
          className="group flex items-center space-x-2"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="mdi:github" color="#666" />
          <div className="relative">
            <span>Github</span>
            <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ishika-dav-b03679136/"
          className="group flex items-center space-x-2"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="mdi:linkedin" color="#666" />
          <div className="relative">
            <span>LinkedIn</span>
            <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </div>
        </a>
        <a
          data-link="email"
          href="mailto: ishikadav03@gmail.com"
          className="group flex items-center space-x-2"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="mdi:gmail" color="#666" />
          <div className="relative">
            <span>Email</span>
            <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </div>
        </a>
      </div>
    </section>

  );
}
