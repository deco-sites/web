// import { Image as LiveImage } from "deco-sites/std/components/types.ts";
// import Image from "deco-sites/std/components/Image.tsx";
// import { useEffect, useState } from "preact/hooks";

// export interface Props {
//   desktopColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
//   tabletColumns?: 1 | 2 | 3 | 4;
//   mobileColumns?: 1 | 2;
//   slides?: Slide[];
//   arrowLeft?: LiveImage;
//   arrowRight?: LiveImage;
// }

// export interface Slide {
//   logo?: LiveImage;
//   alt?: string;
//   link?: string;
// }

// interface ArrowProps {
//   src: LiveImage;
//   className?: string;
//   onClick: () => void;
// }

// export default function Carousel(props: Props) {
//   const [columns, setColumns] = useState(
//     window.innerWidth >= 1200
//       ? props.desktopColumns || 1
//       : window.innerWidth >= 768
//       ? props.tabletColumns || 1
//       : props.mobileColumns || 1,
//   );

//   const slides = props.slides || [];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const shouldHideOverflow = slides.length > columns;
//   const slideWidth = 100 / columns;

//   const moveSlide = (direction: "left" | "right") => {
//     if (direction === "left" && currentSlide > 0) {
//       setCurrentSlide((prevSlide) => prevSlide - 1);
//     } else if (direction === "right" && currentSlide < slides.length - 1) {
//       setCurrentSlide((prevSlide) => prevSlide + 1);
//     }
//   };

//   useEffect(() => {
//     const updateColumns = () => {
//       const newColumns = window.innerWidth >= 1200
//         ? props.desktopColumns || 1
//         : window.innerWidth >= 768
//         ? props.tabletColumns || 1
//         : props.mobileColumns || 1;
//       setColumns(newColumns);
//     };

//     addEventListener("resize", updateColumns);

//     return () => {
//       removeEventListener("resize", updateColumns);
//     };
//   }, [props.desktopColumns, props.tabletColumns, props.mobileColumns]);

//   const totalCarouselWidth = slides.length * slideWidth;

//   const isLastSlideVisible =
//     (currentSlide + columns >= slides.length && currentSlide < slides.length) ||
//     (currentSlide + columns >= slides.length && slides.length <= columns);

//   const ArrowLeft = ({ src, onClick }: ArrowProps) => (
//     <button
//       onClick={onClick}
//       className={`${
//         currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
//       } `}
//       disabled={currentSlide === 0}
//     >
//       <Image src={src} width={50} height={50} />
//     </button>
//   );

//   const ArrowRight = ({ src, onClick }: ArrowProps) => (
//     <button
//       onClick={onClick}
//       className={`${
//         isLastSlideVisible ? "opacity-50 cursor-not-allowed" : ""
//       } `}
//       disabled={isLastSlideVisible}
//     >
//       <Image src={src} width={50} height={50} />
//     </button>
//   );

//   return (
//     <div
//       class={`relative xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3 flex flex-col ${
//         shouldHideOverflow ? "overflow-hidden" : ""
//       }`}
//     >
//       <div
//         class="flex gap-[2%] px-[10px] py-[70px]"
//         style={{
//           width: `${totalCarouselWidth}%`,
//           transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
//           transition: "transform 0.3s ease-in-out",
//         }}
//       >
//         {props.slides && props.slides.length > 0
//           ? slides.map((slide: Slide, index: number) => (
//             <a href={slide.link} key={index}>
//               <Image
//                 src={slide.logo || ""}
//                 class="w-full h-full object-contain"
//                 width={200}
//                 height={200}
//                 alt={slide.alt || ""}
//               />
//             </a>
//           ))
//           : <p>No slides to display</p>}
//       </div>
//       {props.arrowLeft && props.arrowRight && (
//         <div class="absolute inset-y-0 w-full flex justify-between items-center pr-6">
//           <ArrowLeft
//             src={props.arrowLeft}
//             onClick={() => moveSlide("left")}
//           />
//           <ArrowRight
//             src={props.arrowRight}
//             onClick={() => moveSlide("right")}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  limitedCarousel?: boolean;
  /** @description Number of columns to display on desktop screens. */
  desktopColumns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /** @description Number of columns to display on tablet screens. */
  tabletColumns?: 1 | 2 | 3 | 4;
  /** @description Number of columns to display on mobile screens. */
  mobileColumns?: 1 | 2;
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

  const isLastSlideVisible =
    (currentSlide + columns >= slides.length && currentSlide < slides.length) ||
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
      className={`${
        isLimited && currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
      } `}
      disabled={isLimited && currentSlide === 0}
    >
      <Image src={src} width={60} height={60} />
    </button>
  );

  const ArrowRight = ({
    src,
    onClick,
    isLimited,
    isLastSlideVisible,
  }: ArrowProps) => (
    <button
      onClick={onClick}
      className={`${
        isLimited && isLastSlideVisible ? "opacity-50 cursor-not-allowed" : ""
      } `}
      disabled={isLimited && isLastSlideVisible}
    >
      <Image src={src} width={60} height={60} />
    </button>
  );

  return (
    <div class="bg-gray-100 py-[70px]">
      <div class="xl:max-w-[1440px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto flex lg:justify-start justify-center border  border-t-zinc-500 border-x-transparent border-b-transparent">
        <h2 class="text-2xl font-bold px-[10px] pb-[40px] pt-[11px]">
          <span class="border-4 border-green-400 rounded-full bg-green-200 p-2">
            Recent Bounty Finalized
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
            transition: "transform 0.6s ease-in-out",
            display: "grid",
            gridTemplateColumns: `repeat(${clonedSlides.length}, 1fr)`,
          }}
        >
          {props.slides && props.slides.length > 0
            ? clonedSlides.map((slide: Slide, index: number) => (
              <a href={slide.link} key={index} className="px-[10px]">
                <Image
                  src={slide.image || ""}
                  className="w-full object-contain"
                  width={slide.width || 200}
                  height={slide.height || 200}
                  alt={slide.label || ""}
                />
              </a>
            ))
            : <p>No slides to display</p>}
        </div>
        {props.arrowLeft && props.arrowRight && (
          <div className="absolute inset-y-0 w-full flex justify-between items-center lg:px-0 px-[20px]">
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
