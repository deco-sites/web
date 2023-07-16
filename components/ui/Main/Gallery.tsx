import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Text {
  /** @format textarea */
  label?: string;
}

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
  Text?: Text[];
  fontSizeText?: string;
  fontWeightText?:
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
    fontSizeText = "",
    fontWeightText = "normal",
  } = props || {};

  const titleStyle = {
    fontSize: fontSizeTitle,
    fontWeight: fontWeightTitle,
  };

  const TextStyle = {
    fontSize: fontSizeText,
    fontWeight: fontWeightText,
  };

  const Text = props.Text?.map((props) => (
    <li class="text-justify" style={TextStyle}>
      {props.label || ""}
    </li>
  ));

  return (
    <div
      class="w-full min-h-[770px] flex items-center justify-center mt-[50px]"
      style={gradientStyle}
    >
      <div class="relative lg:my-0 m-[5%] w-full h-full">
        <div class="max-w-[1280px] mx-auto w-full h-full md:min-h-0 min-h-[400px] p-[20px] rounded-md bg-white">
          <div class="flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-[40px] gap-[20px] w-full h-full">
            <div class="md:w-[50%] w-full flex md:justify-start justify-center">
              <div class="aspect-w-16 aspect-h-9 w-full h-full relative rounded-lg">
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
                  class="w-full rounded-lg"
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
              <ul>
                {Text || ""}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
