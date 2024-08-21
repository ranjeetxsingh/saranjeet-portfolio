import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hey, I'm Saranjeet.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          
          I enjoy <span className="heroShiny1 text-fun-pink">transforming</span> visions into {" "}
          <span className="heroShiny2 text-fun-pink">stunning</span> visuals.
          
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/code.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD right-[0px]  bottom-[-270px] max-sm:left-[250px] max-sm:top-[350px] sm:right-[0%] lg:bottom-[-280px] lg:right-[100px] w-[100px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/illustrator.svg"
          />
          <img
            className="sqD right-[110px] bottom-[-270px] max-sm:left-[250px] max-sm:top-[350px] sm:right-[25%] lg:bottom-[-230px] lg:right-[270px] w-[100px]"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/adobe-indesign.svg"
          />
          <img
          // min-sm:left-[15px] max-sm:top-[200px] bottom-[-85px] sm:bottom-[-100px] sm:left-5
            className="sqD hidden  left-[100px] top-[300px] sm:top-[220px] sm:left-[20px] md:bottom-[-320px]   md:top-[300px] lg-top-[300px] sm:block lg-bottom-[-320px] lg-left-[40px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/behance-svgrepo-com.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD max-sm:left-[10px] bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD min-sm:left-[15px] max-sm:top-[200px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/photoshop.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
