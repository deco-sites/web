import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import CircleText from "deco-sites/web/sections/CircleText.tsx";

export interface BannerProps {
  title?: string;
  text?: string;
  image?: LiveImage;
  phrase?: string;
}

export default function Banner(props: BannerProps) {
  const { title, text, image, phrase } = props;

  return (
    <div class="bg-[#22c489]">
      <div class="flex justify-between lg:min-h-[300px] lg:p-[10px] max-w-[1440px] min-h-[400px] mx-auto overflow-hidden relative">
        <h1 class="absolute bg-black flex font-semibold items-center justify-center min-h-[50px] min-w-[170px] origin-top-left rotate-[-90deg] text-[1.5em] text-white top-[100%] transform z-10">
          {title}
        </h1>
        <p class=" bg-[#053535] border-4 border-[#00ff80] flex-col font-bold h-fit lg:flex-row lg:text-left lg:mt-[10px] lg:mx-0 mt-[40px] mx-auto px-[10px] relative rounded-r-xl text-[1.7em] text-center text-white w-fit z-10">
          {text}
        </p>
        {image
          ? (
            <Image
              src={image}
              width={100}
              height={100}
              class="absolute bottom-0 h-full lg:bottom-unset max-h-[300px] object-cover w-full"
              alt="banner"
            />
          )
          : null}
        <CircleText text={phrase || ""} />
      </div>
    </div>
  );
}
