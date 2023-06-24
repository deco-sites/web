import { FunctionalComponent, h } from "preact";
import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

interface WindowProps {
  firstVideo: LiveImage;
  secondVideo: LiveImage;
}

const Window: FunctionalComponent<WindowProps> = (
  { firstVideo, secondVideo },
) => {
  return (
    <div class="flex flex-col items-center relative w-full">
      <div class="bg-white rounded-lg shadow-lg relative bottom-[170px] w-full max-w-[500px]">
        <div class="flex items-center flex-row-reverse gap-[10px] mt-2 pb-2 px-4 border-b shadow-md">
          <span class="bg-red-500 w-3 h-3 rounded-full"></span>
          <span class="bg-yellow-500 w-3 h-3 rounded-full"></span>
          <span class="bg-green-500 w-3 h-3 rounded-full"></span>
        </div>
        <div class="aspect-w-16 aspect-h-9 w-full">
          <video
              src={firstVideo}
              alt={firstVideo}
              autoPlay
              muted
              loop
              preload="auto"
              webkit-playsinline
              x5-playsinline
              playsInline
              class="w-full h-full rounded-b-lg"
            >
              Video não suportado!
            </video>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-[3px_1px_19px_9px_#00000024] absolute top-[5%] left-[3%] max-w-[500px] w-full">
        <div class="flex items-center flex-row-reverse gap-[10px] mt-2 pb-2 px-4 border-b shadow-md">
          <span class="bg-red-500 w-3 h-3 rounded-full"></span>
          <span class="bg-yellow-500 w-3 h-3 rounded-full"></span>
          <span class="bg-green-500 w-3 h-3 rounded-full"></span>
        </div>
        <div class="aspect-w-16 aspect-h-9 w-full">
           <video
              src={secondVideo}
              alt={secondVideo}
              autoPlay
              muted
              loop
              preload="auto"
              webkit-playsinline
              x5-playsinline
              playsInline
              class="w-full h-full rounded-b-lg"
            >
              Video não suportado!
            </video>
        </div>
      </div>
    </div>
  );
};

export default Window;
