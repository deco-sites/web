// import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

// export interface Props {
//   video?: LiveImage;
//   text?: string;
// }

// export default function Gallery(props: Props) {
//   const gradientStyle = {
//     backgroundImage:
//       "linear-gradient(to bottom, #64EF74, #59eead 50%, #0a1a13 50%, #0a1a13 100%, #0a1a13 100%)",
//   };
//   return (
//     <div
//       class="w-full lg:min-h-[770px] flex items-center justify-center mt-[50px]"
//       style={gradientStyle}
//     >
//       <div class="max-w-[1440px] mx-auto w-full py-[100px]">
//         <div class="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-[80px] px-[35px]">
//           <div class="md:w-[50%] w-full flex md:justify-start justify-center">
//             <div class="aspect-w-16 aspect-h-9 overflow-hidden max-w-[300px] h-full relative rounded-[13px] shadow-[3px_1px_19px_9px_#00000024]">
//               <video
//                 src={props.video || ""}
//                 alt={props.video || ""}
//                 autoPlay
//                 muted
//                 loop
//                 preload="metadata"
//                 webkit-playsinline
//                 x5-playsinline
//                 playsInline
//                 class="w-full rounded-[13px]"
//               >
//                 Video not supported!
//               </video>
//             </div>
//           </div>
//           <div class="md:w-[50%] w-full">
//             <p class="text-white">{props.text || ""}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import type { Video as LiveImage } from "deco-sites/std/components/types.ts";
import { useEffect, useState } from "preact/hooks";

export interface Slide {
  id?: number;
  video?: LiveImage;
  text?: string;
}

export interface Props {
  slides: Slide[];
}

export default function Gallery(props: Props) {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const clonedSlides = slides.length > 0 ? slides.concat(slides) : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % clonedSlides.length);
    }, 5000);
    console.log("currentSlide:", currentSlide);
    return () => clearTimeout(timer);
  }, [currentSlide, clonedSlides.length]);

  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to bottom, #64EF74, #59eead 50%, #0a1a13 50%, #0a1a13 100%, #0a1a13 100%)",
  };

  return (
    <div
      class="w-full lg:min-h-[770px] flex items-center justify-center mt-[50px]"
      style={gradientStyle}
    >
      <div class="relative overflow-hidden md:mx-[80px] md:my-0 m-[10%]">
        <div
          class="h-full flex transition-transform duration-1000"
          style={`transform: translateX(-${currentSlide * 100}%)`}
        >
          {clonedSlides.map((slide, index) => (
            <div key={`${slide.id}-${index}`} class="w-full flex-shrink-0">
              <div class="max-w-[1440px] mx-auto w-full py-[100px] rounded-md glass">
                <div class="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-[80px] px-[35px]">
                  <div class="md:w-[50%] w-full flex md:justify-start justify-center">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden max-w-[300px] h-full relative rounded-[13px] shadow-[3px_1px_19px_9px_#00000024]">
                      <video
                        src={slide.video || ""}
                        alt={slide.video || ""}
                        autoPlay
                        muted
                        loop
                        preload="none"
                        webkit-playsinline
                        x5-playsinline
                        playsInline
                        class="w-full rounded-[13px]"
                      >
                        Video not supported!
                      </video>
                    </div>
                  </div>
                  <div class="md:w-[50%] w-full">
                    <p class="text-white">{slide.text || ""}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
