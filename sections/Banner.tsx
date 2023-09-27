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
      <div class=" flex justify-between lg:p-[10px] max-w-[1440px] mx-auto lg:min-h-[300px] min-h-[400px] relative overflow-hidden">
        <h1 class="font-semibold text-white flex items-center justify-center text-[1.5em] bg-black transform origin-top-left rotate-[-90deg] min-h-[50px] min-w-[170px] absolute top-[100%] z-10">
          {title}
        </h1>
        <p class="font-bold text-white text-[2em] relative z-10 lg:flex-row flex-col lg:text-left text-center w-full lg:pt-[10px] pt-[40px]">
          {text}
        </p>
        {image
          ? (
            <Image
              src={image}
              width={100}
              height={100}
              class="absolute w-full h-full object-cover lg:bottom-unset bottom-0 max-h-[300px]"
              alt="banner"
            />
          )
          : null}
        <CircleText text={phrase || ""} />
      </div>
    </div>
  );
}
