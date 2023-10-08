import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface PortfolioProps {
  phrase?: string;
  logo?: {
    image?: LiveImage;
    alt?: string;
    width?: number;
    height?: number;
  };
  page?: {
    image?: LiveImage;
    alt?: string;
    width?: number;
    height?: number;
  };
  description?: HTML;
  technologies?: Tech[];
}

export interface Tech {
  label?: string;
  image?: LiveImage;
  width?: number;
  height?: number;
}

export default function Portfolio(props: PortfolioProps) {
  return (
    <div class="flex flex-col">
      <div class="bg-gray-100 pt-[70px]">
        <div class="border border-b-transparent border-t-zinc-500 border-x-transparent flex flex-col items-center justify-center lg:max-w-[960px] md:max-w-[720px] mx-auto px-[10px] sm:flex-row-reverse sm:justify-between sm:max-w-[540px] w-full xl:max-w-[1440px]">
          <div class="flex gap-[10px] items-center py-[10px] sm:py-0">
            {props?.logo?.image
              ? (
                <figure>
                  <Image
                    src={props?.logo?.image || ""}
                    width={props?.logo?.width || 40}
                    height={props?.logo?.height || 40}
                    alt={props?.logo?.alt || ""}
                  />
                </figure>
              )
              : null}
          </div>
          <h2 class="font-bold py-[26px] px-[10px] text-2xl">
            <span class="bg-green-200 border-4 border-green-400 flex p-2 rounded-full text-center w-full">
              {props.phrase}
            </span>
          </h2>
        </div>
      </div>
      <div class="bg-gradient-green py-[40px] mb-[70px]">
        <div class="flex flex-col items-center justify-center lg:max-w-[960px] md:max-w-[720px] mx-auto px-[10px] sm:flex-row sm:justify-between sm:max-w-[540px] w-full xl:max-w-[1440px]">
          <div class="flex flex-col items-center justify-center px-[10px] sm:px-0 sm:w-1/4 sm:pl-[15px]">
            <figure class="sm:pb-0 pb-[40px]">
              <Image
                src={props.page?.image || ""}
                width={props.page?.width || 540}
                height={props.page?.height || 960}
                class="rounded-[10px] border-[3px] border-[#64EF74]"
                alt={props.page?.alt || ""}
              />
            </figure>
          </div>
          <div class="flex flex-col sm:items-start items-center justify-center px-[10px] sm:px-0 sm:w-3/4 gap-[30px]">
            <div class="sm:text-left text-center max-w-[80%]">
              <HTMLRenderer
                html={props?.description || ""}
              />
            </div>
            <div class="flex flex-row flex-wrap gap-[10px] justify-center">
              {props.technologies?.map((tech) => (
                <div class="flex flex-col items-center justify-between">
                  <figure
                    style={{
                      height: tech?.height || "",
                    }}
                  >
                    <Image
                      src={tech?.image || ""}
                      width={tech?.width || 100}
                      height={tech?.height || 100}
                      class={`rounded-full`}
                      alt={tech.label}
                    />
                  </figure>
                  <p class="font-bold text-center text-white">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
