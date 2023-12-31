import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  limitedCarousel?: boolean;
  /** @description Number of columns to display on desktop screens. */
  desktopColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /** @description Number of columns to display on tablet screens. */
  tabletColumns?: 1 | 2 | 3 | 4;
  /** @description Number of columns to display on mobile screens. */
  mobileColumns?: 1 | 2;
  message?: string;
  logoLeft?: LiveImage;
  altLeft?: string;
  logoRight?: LiveImage;
  altRight?: string;
  slides?: Slide[];
  arrowLeft?: LiveImage;
  arrowRight?: LiveImage;
}

export interface Slide {
  image?: LiveImage;
  width?: number;
  height?: number;
  label?: string;
  link?: string;
}

interface ArrowProps {
  src: LiveImage;
  onClick: () => void;
  isLimited: boolean;
  currentSlide: number;
  isLastSlideVisible?: boolean;
}

export default function Carousel(props: Props) {
  const slides = props.slides || [];
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<number>(slides.length);

  const [columns, setColumns] = useState<number>(
    window.innerWidth >= 1200
      ? props.desktopColumns || 1
      : window.innerWidth >= 768
      ? props.tabletColumns || 1
      : props.mobileColumns || 1,
  );

  const isLimited = props.limitedCarousel === undefined
    ? true
    : props.limitedCarousel;

  const isLastSlideVisible = (currentSlide + columns >= slides.length &&
    currentSlide < slides.length) ||
    (currentSlide + columns >= slides.length && slides.length <= columns);

  const moveSlide = (direction: "left" | "right") => {
    let newSlide = currentSlide;

    if (direction === "left") {
      newSlide = currentSlide > 0
        ? currentSlide - 1
        : isLimited
        ? currentSlide
        : slides.length - 1;
    } else if (direction === "right") {
      if (isLimited && isLastSlideVisible) {
        newSlide = currentSlide;
      } else {
        newSlide = currentSlide < slides.length - 1
          ? currentSlide + 1
          : isLimited
          ? currentSlide
          : 0;
      }
    }
    setCurrentSlide(newSlide);
    setTotalSlides(slides.length);
  };

  useEffect(() => {
    const updateColumns = () => {
      const newColumns = window.innerWidth >= 1200
        ? props.desktopColumns || 1
        : window.innerWidth >= 768
        ? props.tabletColumns || 1
        : props.mobileColumns || 1;
      setColumns(newColumns);
    };

    addEventListener("resize", updateColumns);

    return () => {
      removeEventListener("resize", updateColumns);
    };
  }, [props.desktopColumns, props.tabletColumns, props.mobileColumns]);

  const slideWidth = `${100 / columns}%`;

  const clonedSlides = isLimited ? slides : [...slides, ...slides];

  const ArrowLeft = ({ src, onClick, isLimited, currentSlide }: ArrowProps) => (
    <button
      onClick={onClick}
      class={`${
        isLimited && currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
      } `}
      disabled={isLimited && currentSlide === 0}
      aria-label={`Slide ${currentSlide + 1}/${totalSlides} to the left`}
    >
      <Image src={src} width={60} height={60} alt="icon arrow left" />
    </button>
  );

  const ArrowRight = ({
    src,
    onClick,
    isLimited,
    isLastSlideVisible,
    currentSlide,
  }: ArrowProps) => (
    <button
      onClick={onClick}
      class={`${
        isLimited && isLastSlideVisible ? "opacity-50 cursor-not-allowed" : ""
      } `}
      disabled={isLimited && isLastSlideVisible}
      aria-label={`Slide ${currentSlide + 1}/${totalSlides} to the right`}
    >
      <Image src={src} width={60} height={60} alt="icon arrow right" />
    </button>
  );

  return (
    <div class="bg-gray-100 py-[70px]">
      <div class="border border-b-transparent border-t-zinc-500 border-x-transparent flex flex-col items-center justify-center lg:max-w-[960px] md:max-w-[720px] mx-auto px-[10px] sm:flex-row-reverse sm:justify-between sm:max-w-[540px] w-full xl:max-w-[1440px]">
        <div class="flex gap-[10px] items-center py-[10px] sm:py-0">
          {props.logoLeft
            ? (
              <Image
                src={props.logoLeft}
                width={80}
                height={40}
                alt={props.altLeft}
              />
            )
            : null}
          <span class="font-bold text-2xl">&</span>
          {props.logoRight
            ? (
              <Image
                src={props.logoRight}
                width={80}
                height={40}
                alt={props.altRight}
              />
            )
            : null}
        </div>
        <h2 class="font-bold pb-[40px] pt-[26px] px-[10px] text-2xl">
          <span class="bg-green-200 border-4 border-green-400 flex p-2 rounded-full text-center w-full">
            {props.message}
          </span>
        </h2>
      </div>
      <div
        class={`relative xl:max-w-[1440px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto overflow-hidden`}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, ${slideWidth})`,
        }}
      >
        <div
          style={{
            width: `${clonedSlides.length * 100}%`,
            transform: `translateX(-${
              currentSlide * (100 / clonedSlides.length)
            }%)`,
            transition: "transform 0.3s ease-in-out",
            display: "grid",
            gridTemplateColumns: `repeat(${clonedSlides.length}, 1fr)`,
          }}
        >
          {props.slides && props.slides.length > 0
            ? (
              clonedSlides.map((slide: Slide, index: number) => (
                <a
                  href={slide.link}
                  key={index}
                  class="md:pr-[10px] px-[10px]"
                >
                  <Image
                    src={slide.image || ""}
                    class="border border-slate-500 max-w-none object-contain rounded-md w-100-full"
                    width={slide.width || 200}
                    height={slide.height || 200}
                    alt={slide.label || ""}
                  />
                </a>
              ))
            )
            : <p>No slides to display</p>}
        </div>
        {props.arrowLeft && props.arrowRight && (
          <div class="absolute flex inset-y-0 items-center justify-between lg:px-0 px-[20px] w-full">
            <ArrowLeft
              src={props.arrowLeft}
              onClick={() => moveSlide("left")}
              isLimited={isLimited}
              currentSlide={currentSlide}
            />
            <ArrowRight
              src={props.arrowRight}
              onClick={() => moveSlide("right")}
              isLimited={isLimited}
              isLastSlideVisible={isLastSlideVisible}
              currentSlide={currentSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
}
