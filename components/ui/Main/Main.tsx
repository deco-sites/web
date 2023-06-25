import Window from "deco-sites/web/components/ui/Main/Window.tsx";
import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
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
   * @description Padding of the title
   */
  paddingLeft?: string;
  paddingRight?: string;
  /**
   * @format color
   * @default #000000
   * @description Color of the title
   */
  colorTitle?: string;
  title?: string;
  /**
   * @format color
   * @default #000000
   * @description Second Color of the title
   */
  secondColorTitle?: string;
  titleSecondColor?: string;
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

  /**
   * @description Flex direction of the title
   */
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
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
  /**
   * @description Estilo do parágrafo
   */
  paragraphStyle?: {
    paragraphy?: string;
    /**
     * @description Cor do paragraphy
     * @format color
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
  };
}

export default function Main(props: Props) {
  const {
    mainColor,
    borderLeftRadius,
    borderRightRadius,
    backgroundColorRight,
    backgroundColorLeft,
    paddingLeft,
    paddingRight,
    colorTitle,
    secondColorTitle,
    titleSecondColor,
    title,
    fontSize,
    fontWeight,
    textAlign,
    alignItems,
    backgroundRightHeight,
    paragraphStyle,
  } = props;

  const {
    paragraphy,
  } = paragraphStyle || {};

  const mainColorStyle = {
    backgroundColor: mainColor || "#ffffff",
  };

  const titleStyle = {
    color: colorTitle || "#000000",
    fontSize: fontSize,
    fontWeight: fontWeight || "normal",
    textAlign: textAlign || "left",
  };

  const spanTitleStyle = {
    color: secondColorTitle || "#000000",
  };

  const leftDivStyle = {
    backgroundColor: backgroundColorLeft,
    padding: paddingLeft || "0px",
    height: backgroundRightHeight,
    alignItems: alignItems || "flex-start",
    borderRadius: borderLeftRadius || "0",
  };

  const rightDivStyle = {
    backgroundColor: backgroundColorRight,
    padding: paddingRight || "0px",
    height: backgroundRightHeight,
    alignItems: alignItems || "flex-start",
    borderRadius: borderRightRadius || "0",
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
    color: paragraphStyle?.color || colorTitle || "#000000",
    fontSize: paragraphStyle?.fontSize || fontSize,
    fontWeight: paragraphStyle?.fontWeight || fontWeight || "normal",
    textAlign: paragraphStyle?.textAlign || textAlign || "left",
  };

  return (
    <main
      class="grid lg:grid-cols-2 grid-cols-1 w-full h-full md:h-screen items-center"
      style={mainColorStyle}
    >
      <style>{scrollbarStyle}</style>
      <div
        class="col-span-2 md:col-span-1 flex flex-col justify-center gap-[10px]"
        style={leftDivStyle}
      >
        <h1 style={titleStyle}>
          {title}
          {titleSecondColor && (
            <span style={spanTitleStyle}>{titleSecondColor}</span>
          )}
        </h1>
        <p style={paragraphyStyle}>
          {paragraphy}
        </p>
      </div>
      <div class="col-span-2 md:col-span-1 flex" style={rightDivStyle}>
        <Window firstVideo={props.firstVideo} secondVideo={props.secondVideo} />
      </div>
    </main>
  );
}
