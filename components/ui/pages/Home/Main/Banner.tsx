import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  text?: HTML;
  img?: DecoImage;
  title?: string;
  alt?: string;
}

export default function Banner(props: Props) {
  return (
    <section class="w-full relative top-[40px] bg-gradient-green">
      <div class="relative w-full h-full flex flex-col lg:flex-row min-h-[225px]">
        <div class="lg:absolute flex flex-col lg:flex-row inset-0 w-full h-full lg:min-h-0 min-h-[192px]">
          <div class="inset-0 lg:w-1/2">
            <div class="inset-0 p-8 max-w-screen-2xl lg:m-0 mx-auto relative h-full flex flex-col justify-center ql-editor">
              <HTMLRenderer html={props.text || ""} class="flex lg:justify-center justify-left" />
            </div>
          </div>
          <div class="inset-0 lg:w-1/2 min-h-[225px] pl-[20px]">
            <figure class="bg-gradient-lemon w-full h-full flex rounded-l-[200px] flex justify-center items-center overflow-hidden min-h-[225px] shadow-box-shadow-1">
              <img
                src={props.img || ""}
                alt={props.alt || ""}
                class="w-full h-full object-cover min-h-[225px]"
                width={700}
                height={225}
              />
              <label class="text-2xl leading-[1] font-bold text-[#0A2121] absolute">
                {props.title}
              </label>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
