import airecipe from "/src/assets/images/airecipe.webp"
import trelloapp from "/src/assets/images/trelloapp.webp"

import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <>
      <section
        ref={forwardedRef}
        id="works"
        className="nav-change overflow-hidden my-[10%]"
      >
        <Heading title="Projects" />
        <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
          {/* Project #1 */}
          <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
            <Projects
              link="https://github.com/ishika-dav"
              img={trelloapp}
              alt="Trello Inspired Web Application"
              name="trello inspired web application"
              type="Full-Stack Development"
              year="2023"
              tools="HTML • CSS • Python • Django Framework"
            />
          </div>
          {/* Project #2 */}
          <div className=" col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Projects
              link="https://github.com/ishika-dav"
              img={airecipe}
              alt="Generative AI Application"
              name="ai recipe generator"
              type="Generative AI API"
              year="2023"
              tools="Python • OpenAI API"
            />
          </div>
        </div>
      </section>
      <div className="my-4 flex justify-center items-center">
        <a
          href="/src/assets/ishika-dav.pdf"
          download="ishika-dav-cv.pdf"
          className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 text-lg 2xl:text-4xl transition ease-in-out duration-300 hover:scale-105"
        >
          Download My CV
        </a>
      </div>
    </>
  );
}
