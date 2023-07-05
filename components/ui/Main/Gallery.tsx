import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  video?: LiveImage;
  text?: string;
}

export default function Gallery(props: Props) {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to bottom, #64EF74, #59eead 50%, #0a1a13 50%, #0a1a13 100%, #0a1a13 100%)",
  };
  return (
    <div
      class="w-full lg:min-h-[770px] flex items-center justify-center mt-[50px]"
      style={gradientStyle}
    >
      <div class="max-w-[1440px] mx-auto w-full py-[100px]">
        <div class="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-[80px] px-[35px]">
          <div class="md:w-[50%] w-full flex md:justify-start justify-center">
            <div class="aspect-w-16 aspect-h-9 overflow-hidden max-w-[300px] h-full relative rounded-[13px] shadow-[3px_1px_19px_9px_#00000024]">
              <video
                src={props.video || ""}
                alt={props.video || ""}
                autoPlay
                muted
                loop
                preload="auto"
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
            <p class="text-white">{props.text || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
