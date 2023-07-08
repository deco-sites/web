import type { Video as LiveImage } from "deco-sites/std/components/types.ts";
import { useEffect, useRef, useState } from "preact/hooks";

export interface Slide {
  id?: number;
  preview?: LiveImage;
  title?: string;
  fontSizeTitle?: string;
  fontWeightTitle?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
  paragraph?: string;
  fontSizeParagraph?: string;
  fontWeightParagraph?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
}

export interface Props {
  slides: Slide[];
}

export default function Gallery(props: Props) {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to bottom, #64EF74, #59eead 50%, #0a1a13 50%, #0a1a13 100%, #0a1a13 100%)",
  };

  const {
    fontSizeTitle = "",
    fontWeightTitle = "normal",
    fontSizeParagraph = "",
    fontWeightParagraph = "normal",
  } = props.slides[currentSlide] || {};

  const titleStyle = {
    fontSize: fontSizeTitle,
    fontWeight: fontWeightTitle,
  };

  const paragraphStyle = {
    fontSize: fontSizeParagraph,
    fontWeight: fontWeightParagraph,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div
      class="w-full lg:min-h-[770px] flex items-center justify-center mt-[50px]"
      style={gradientStyle}
    >
      <div class="relative overflow-hidden lg:my-0 my-[7%] mx-[7%]">
        <div
          class="h-full flex transition-transform duration-1000"
          style={`transform: translateX(-${currentSlide * 100}%)`}
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              class="w-full flex-shrink-0"
            >
              <div class="max-w-[1440px] mx-auto w-full py-[100px] rounded-md glassmorphism">
                <div class="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-[80px] px-[35px] gap-[20px]">
                  <div class="lg:w-[30%] md:w-[50%] w-full flex md:justify-start justify-center">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden max-w-[300px] h-full relative rounded-[13px] shadow-[3px_1px_19px_9px_#00000024]">
                      <video
                        src={slide.preview || ""}
                        alt={slide.preview || ""}
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        webkit-playsinline
                        x5-playsinline
                        playsInline
                        class="w-full rounded-[13px]"
                      >
                        Video not supported!
                      </video>
                    </div>
                  </div>
                  <div class="lg:w-[70%] md:w-[50%] w-full flex flex-col items-start gap-[20px]">
                    <h2
                      style={titleStyle}
                    >
                      <span class="bg-[#00ff5e]">{slide.title || ""}</span>
                    </h2>
                    <p
                      style={paragraphStyle}
                      class="text-white"
                    >
                      {slide.paragraph || ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="absolute top-[45%] left-0 right-0 flex justify-between">
          <button
            class="text-3xl bg-[#00ff5e] text-[#0a1a13] py-3 px-2 focus:outline-none"
            onClick={goToPreviousSlide}
            aria-label="button previous slide"
          >
            &#8249;
          </button>
          <button
            class="text-3xl bg-[#00ff5e] text-[#0a1a13] py-3 px-2 focus:outline-none"
            onClick={goToNextSlide}
            aria-label="button next slide"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
