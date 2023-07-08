import Window from "deco-sites/web/components/ui/Main/Window.tsx";
import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Paragraph {
  /**
   * @description Paragraph Text
   */
  paragraph?: string;
  /**
   * @format color
   * @description Paragraphy color
   */
  color?: string;
  fontSize?: string;
  fontWeight?:
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
  textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
}

export interface Link {
  label?: string;
  url?: string;
  text?: string;
}

export interface Text {
  title?: string;
  /**
   * @format color
   * @default #000000
   * @description First color of the title
   */
  colorTitle?: string;
  secondTitle?: string;
  /**
   * @format color
   * @default #000000
   * @description Second color of the title
   */
  secondTitleColor?: string;
  /**
   * @description Font size of the title
   */
  fontSize?: string;
  /**
   * @description Font weight of the title
   */
  fontWeight?:
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
  /**
   * @description Text alignment of the title
   */
  textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
}

export interface Main {
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  /**
   * @description Main color of the screen
   * @default #ffffff
   * @format color
   */
  mainColor?: string;
  /**
   * @description Border radius of the screen
   * @default 0px
   */
  borderLeftRadius?: string;
  // /**
  //  * @description Border radius of the screen
  //  * @default 0px
  //  */
  // borderRightRadius?: string;
  /**
   * @format color
   * @default #ffffff
   * @description Color of the Background Right of the screen
   */
  backgroundColorLeft?: string;
  /**
   * @format color
   * @default #a0a0a0
   * @description Color of the Background Left of the screen
   */
  textColorBeforeButton?: string;
  /**
   * @description Height of the textColorBeforeButton
   */
  backgroundRightHeight?: string;
}

export interface Props {
  main?: Main;
  title?: Text;
  /**
   * @description Flex direction of the title
   */
  paragraph?: Paragraph;
  button?: Link;
  /**
   * @description First video
   */
  firstVideo: LiveImage;
  /**
   * @description Second video
   */
  secondVideo: LiveImage;
}

export default function Main(props: Props) {
  const {
    mainColor,
    borderLeftRadius,
    // borderRightRadius,
    textColorBeforeButton,
    backgroundColorLeft,
    alignItems,
    backgroundRightHeight,
  } = props.main || {};

  const {
    colorTitle,
    secondTitleColor,
    secondTitle,
    title,
    fontSize: propsFontSize,
    fontWeight: propsFontWeight,
    textAlign: propsTextAlign,
  } = props.title || {};

  const {
    paragraph,
    color,
    fontSize,
    fontWeight,
    textAlign,
  } = props.paragraph || {};

  const {
    url,
    text,
  } = props.button || {};

  const mainStyle = {
    backgroundColor: mainColor || "#ffffff",
  };

  const titleStyle = {
    color: colorTitle || "#000000",
    fontSize: propsFontSize,
    fontWeight: propsFontWeight || "normal",
    textAlign: propsTextAlign || "left",
  };

  const spanTitleStyle = {
    color: secondTitleColor || "#000000",
  };

  const leftDivStyle = {
    backgroundColor: backgroundColorLeft,
    height: backgroundRightHeight,
    alignItems: alignItems || "flex-start",
    borderRadius: borderLeftRadius || "0",
  };

  const rightDivStyle = {
    // backgroundColor: textColorBeforeButton,
    height: backgroundRightHeight,
    alignItems: alignItems || "flex-start",
    // borderRadius: borderRightRadius || "0",
    // backgroundImage: `
    //   linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    //   linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
    // `,
    // backgroundSize: "30px 30px",
  };

  const scrollbarStyle = `
  body {
    scrollbar-width: thin;
    scrollbar-color: ${props.title?.colorTitle || "#ffffff"} ${
    props.main?.backgroundColorLeft || "#a0a0a0"
  };
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: #00ff5e;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${props.title?.colorTitle || "#ffffff"};
  }
`;

  const paragraphyStyle = {
    paragraph: props.paragraph?.paragraph || "",
    color: props.paragraph?.color || color || "#000000",
    fontSize: props.paragraph?.fontSize || fontSize,
    fontWeight: props.paragraph?.fontWeight || fontWeight || "normal",
    textAlign: props.paragraph?.textAlign || textAlign || "left",
  };

  const linkStyle = {
    backgroundColor: colorTitle || "#000000",
    color: "#ffffff",
    fontSize: props.paragraph?.fontSize || fontSize,
    fontWeight: props.paragraph?.fontWeight || fontWeight || "normal",
    url: props.button?.url || url,
    text: props.button?.text || text,
  };

  const textBeforeButton = {
    fontSize: props.paragraph?.fontSize || fontSize,
    fontWeight: props.paragraph?.fontWeight || fontWeight || "normal",
    color: textColorBeforeButton || "#ffffff",
  };

  return (
    <main
      class="w-full lg:min-h-[770px] lg:pt-[100px] md:pt-[50px] lg:pb-0 pb-[40px] relative top-[50px]"
      style={mainStyle}
    >
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-[20px] max-w-[1440px] mx-auto">
        <style>{scrollbarStyle}</style>
        <div
          class="col-auto flex flex-col justify-center gap-[10px] lg:pb-0 lg:pt-0 pt-[10%] pb-[5%] relative md:px-[80px] px-[35px]"
          style={leftDivStyle}
        >
          <h1 style={titleStyle}>
            {title}
            {secondTitle && <span style={spanTitleStyle}>{secondTitle}</span>}
          </h1>
          <p style={paragraphyStyle} class="mt-[10px] leading-[22px]">
            {paragraph}
          </p>
          {props.button?.label && (
            <div class="grid md:grid-cols-2 grid-cols-1 items-center w-full mt-[20px] md:gap-[40px] gap-[30px]">
              {props.button.text && (
                <>
                  <p style={textBeforeButton} class="leading-[22px]">
                    {props.button.text}
                  </p>
                </>
              )}
              <a
                href={`${props.button.url}`}
                class="relative p-4 text-center rounded-full hover:shadow-custom"
                style={linkStyle}
              >
                <span>{props.button.label}</span>
                <span class="absolute right-[10px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#00ff5e]">
                  <span
                    class="flex items-center justify-center text-2xl text-bolder w-full h-full"
                    style={`color: ${colorTitle}`}
                  >
                    ↗
                  </span>
                </span>
              </a>
            </div>
          )}
        </div>
        <div class="col-auto flex relative" style={rightDivStyle}>
          <Window
            firstVideo={props.firstVideo}
            secondVideo={props.secondVideo}
          />
        </div>
      </div>
    </main>
  );
}
