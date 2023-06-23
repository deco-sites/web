import { FunctionalComponent, h } from "preact";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface WindowProps {
  firstImage: LiveImage;
  secondImage: LiveImage;
}

const Window: FunctionalComponent<WindowProps> = (
  { firstImage, secondImage },
) => {
  return (
    <div class="flex flex-col items-center relative w-full">
      <div class="bg-white rounded-lg shadow-lg relative bottom-[100px] w-full max-w-[500px]">
        <div class="flex items-center flex-row-reverse gap-[10px] mt-2 pb-2 px-4 border-b shadow-md">
          <span class="bg-red-500 w-3 h-3 rounded-full"></span>
          <span class="bg-yellow-500 w-3 h-3 rounded-full"></span>
          <span class="bg-green-500 w-3 h-3 rounded-full"></span>
        </div>
        <div class="aspect-w-16 aspect-h-9 w-full">
          <Image
            class="w-full h-full rounded-b-lg"
            src={firstImage}
            alt={firstImage}
            width={1920}
            height={1080}
            loading={"eager"}
          />
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-[3px_1px_19px_9px_#00000024] absolute top-[35%] left-[3%] max-w-[500px] w-full">
        <div class="flex items-center flex-row-reverse gap-[10px] mt-2 pb-2 px-4 border-b shadow-md">
          <span class="bg-red-500 w-3 h-3 rounded-full"></span>
          <span class="bg-yellow-500 w-3 h-3 rounded-full"></span>
          <span class="bg-green-500 w-3 h-3 rounded-full"></span>
        </div>
        <div class="aspect-w-16 aspect-h-9 w-full">
          <Image
            class="w-full h-full rounded-b-lg"
            src={secondImage}
            alt={secondImage}
            width={1920}
            height={1080}
            loading={"eager"}
          />
        </div>
      </div>
    </div>
  );
};

export default Window;
