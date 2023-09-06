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
  link?: string;
  labelLink?: string;
}

export default function Gallery(props: Props) {
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
    <li class="lg:text-justify text-center" style={TextStyle}>
      {props.label || ""}
    </li>
  ));

  return (
    <div class="w-full lg:p-[30px] flex items-center justify-center bg-gradient-double-green min-h-[500px]">
      <div class="relative lg:my-0 m-[5%] w-full h-full">
        <div class="max-w-[1280px] mx-auto w-full h-full md:min-h-0 min-h-[400px] p-[20px] rounded-md bg-white shadow-[3px_1px_19px_9px_#00000024]">
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
                class="lg:text-left text-center"
              >
                <span class="bg-[#00ff5e]">
                  {props.title || ""}
                </span>
              </h2>
              <ul class="lg:m-0 mx-auto">
                {Text || ""}
              </ul>
              <a
                href={props.link || "/"}
                class="relative p-4 text-center rounded-full hover:shadow-custom bg-[#2c313f] min-w-[225px] lg:m-0 mx-auto"
              >
                <span class="text-white font-bold">{props.labelLink}</span>
                <span class="absolute right-[10px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#00ff5e]">
                  <span class="flex items-center justify-center text-2xl text-bolder w-full h-full">
                    ↗
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
