import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";
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
        <div class="border border-b-transparent border-t-zinc-500 border-x-transparent flex flex-col-reverse items-center justify-center lg:max-w-[960px] md:max-w-[720px] mx-auto px-[10px] sm:flex-row-reverse sm:justify-between sm:max-w-[540px] w-full xl:max-w-[1440px]">
          <div class="flex gap-[10px] items-center pb-[20px] pt-[10px] sm:py-0">
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
          <h2 class="font-bold px-[10px] py-[26px] text-2xl">
            <span class="bg-green-200 border-4 border-green-400 flex p-2 rounded-full text-center w-full">
              {props.phrase}
            </span>
          </h2>
        </div>
      </div>
      <div class="bg-gradient-green mb-[70px] py-[40px]">
        <div class="flex flex-col gap-[15px] items-center justify-center mx-auto px-[10px] sm:flex-row sm:justify-between sm:max-w-[960px] w-full xl:max-w-[1440px]">
          <div class="flex flex-col items-center justify-center md:w-1/4 px-[10px] sm:pl-[15px] sm:px-0 sm:w:1/2">
            <figure class="pb-[40px] sm:pb-0">
              <Image
                src={props.page?.image || ""}
                width={props.page?.width || 540}
                height={props.page?.height || 960}
                class="border-[#64EF74] border-[3px] rounded-[10px]"
                alt={props.page?.alt || ""}
              />
            </figure>
          </div>
          <div class="flex flex-col gap-[30px] items-center justify-center md:w-3/4 px-[10px] sm:items-start sm:px-0 sm:w:1/2">
            <div class="max-w-[80%] sm:text-left text-center">
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
                  <p class="font-bold text-base-200 text-center">
                    {tech.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
