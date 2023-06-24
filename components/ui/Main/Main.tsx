import Window from "deco-sites/web/components/ui/Main/Window.tsx";
import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
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
  // fontSizeDesktop?: string;
  // fontSizeMobile?: string;
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
  firstVideo: LiveImage;
  secondVideo: LiveImage;
}

export default function Main(props: Props) {
  const {
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
  } = props;


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
  };

  const rightDivStyle = {
    backgroundColor: backgroundColorRight,
    padding: paddingRight || "0px",
    height: backgroundRightHeight,
    alignItems: alignItems || "flex-start",
  };

  return (
    <main className="grid lg:grid-cols-2 grid-cols-1 w-full h-screen items-center">
      <div className="col-span-2 md:col-span-1 flex" style={leftDivStyle}>
        <h1 style={titleStyle}>
          {title}
          {titleSecondColor && (
            <span style={spanTitleStyle}>{titleSecondColor}</span>
          )}
        </h1>
      </div>
      <div className="col-span-2 md:col-span-1 flex" style={rightDivStyle}>
        <Window firstVideo={props.firstVideo} secondVideo={props.secondVideo} />
      </div>
    </main>
  );
}
