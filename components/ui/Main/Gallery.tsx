import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  preview?: LiveImage;
  title?: string;
  fontSizeTitle?: string;
  fontWeightTitle?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
  paragraph?: string;
  fontSizeParagraph?: string;
  fontWeightParagraph?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
}

export default function Gallery(props: Props) {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to bottom, #64EF74, #59eead 50%, #0a1a13 50%, #0a1a13 100%, #0a1a13 100%)",
  };

  const {
    fontSizeTitle = "",
    fontWeightTitle = "normal",
    fontSizeParagraph = "",
    fontWeightParagraph = "normal",
  } = props|| {};

  const titleStyle = {
    fontSize: fontSizeTitle,
    fontWeight: fontWeightTitle,
  };

  const paragraphStyle = {
    fontSize: fontSizeParagraph,
    fontWeight: fontWeightParagraph,
  };

  return (
    <div
      class="w-full lg:min-h-[770px] flex items-center justify-center mt-[50px]"
      style={gradientStyle}
    >
      <div class="relative lg:my-0 m-[5%] w-full h-full">
        <div class="max-w-[1440px] mx-auto w-full h-full md:py-[20px] py-[10px] rounded-md glassmorphism">
          <div class="flex md:flex-row flex-col md:justify-between justify-center items-center px-[20px] gap-[40px] w-full h-full">
            <div class="md:w-[50%] w-full flex md:justify-start justify-center">
              <div class="aspect-w-16 aspect-h-9 w-full h-full relative rounded-lg shadow-[3px_1px_19px_9px_#00000024]">
                <video
                  src={props.preview || ""}
                  alt={props.preview || ""}
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  webkit-playsinline
                  x5-playsinline
                  playsInline
                  class="w-full rounded-lg relative z-[-1]"
                >
                  Video not supported!
                </video>
              </div>
            </div>
            <div class="md:w-[50%] w-full flex flex-col items-start gap-[20px]">
              <h2
                style={titleStyle}
              >
                <span class="bg-[#00ff5e]">
                  {props.title || ""}
                </span>
              </h2>
              <p
                style={paragraphStyle}
                class="text-white"
              >
                {props.paragraph || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
