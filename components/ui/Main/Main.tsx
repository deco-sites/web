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

export interface Props {
  text?: Text;
  /**
   * @description Flex direction of the title
   */
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  paragraphBlock?: Paragraph;
  link?: Link;
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
  /**
   * @description Border radius of the screen
   * @default 0px
   */
  borderRightRadius?: string;
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
  backgroundColorRight?: string;
  /**
   * @description Height of the backgroundColorRight
   */
  backgroundRightHeight?: string;
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
    borderRightRadius,
    backgroundColorRight,
    backgroundColorLeft,
    alignItems,
    backgroundRightHeight,
  } = props;

  const {
    colorTitle,
    secondTitleColor,
    secondTitle,
    title,
    fontSize: propsFontSize,
    fontWeight: propsFontWeight,
    textAlign: propsTextAlign,
  } = props.text || {};

  const {
    paragraph,
    color,
    fontSize,
    fontWeight,
    textAlign,
  } = props.paragraphBlock || {};

  const {
    url,
  } = props.link || {};

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
    backgroundColor: backgroundColorRight,
    height: backgroundRightHeight,
    alignItems: alignItems || "flex-start",
    borderRadius: borderRightRadius || "0",
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
    `,
    backgroundSize: "30px 30px",
    position: "relative",
  };

  const curveStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.5) 10%, transparent 40%)",
  };

  const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props.backgroundColorRight || "#a0a0a0"};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${props.backgroundColorLeft || "#ffffff"};
  }
`;

  const paragraphyStyle = {
    paragraph: props.paragraphBlock?.paragraph || "",
    color: props.paragraphBlock?.color || color || "#000000",
    fontSize: props.paragraphBlock?.fontSize || fontSize,
    fontWeight: props.paragraphBlock?.fontWeight || fontWeight || "normal",
    textAlign: props.paragraphBlock?.textAlign || textAlign || "left",
  };

  const linkStyle = {
    backgroundColor: secondTitleColor || "#000000",
    color: "#000000",
    fontSize: props.paragraphBlock?.fontSize || fontSize,
    fontWeight: props.paragraphBlock?.fontWeight || fontWeight || "normal",
    url: props.link?.url || url,
  };

  return (
    <main
      class="grid lg:grid-cols-2 grid-cols-1 w-full h-full md:h-screen items-center lg:p-0 md:pt-[50px] pt-[100px]"
      style={mainStyle}
    >
      <style>{scrollbarStyle}</style>
      <div
        class="col-auto flex flex-col justify-center gap-[10px] p-[10%]"
        style={leftDivStyle}
      >
        <h1 style={titleStyle}>
          {title}
          {secondTitle && <span style={spanTitleStyle}>{secondTitle}</span>}
        </h1>
        <p style={paragraphyStyle} class="mt-[10px]">
          {paragraph}
        </p>
        {props.link?.label && (
          <div class="flex items-start w-full">
            <a
              href={`mailto:${props.link.url}`}
              class="p-4 lg:w-[50%] w-full mt-[20px] text-center rounded-full"
              style={linkStyle}
            >
              {props.link.label}
            </a>
          </div>
        )}
      </div>
      <div class="col-auto flex lg:pt-[100px]" style={rightDivStyle}>
        <Window firstVideo={props.firstVideo} secondVideo={props.secondVideo} />
        <span style={curveStyle}></span>
      </div>
    </main>
  );
}
