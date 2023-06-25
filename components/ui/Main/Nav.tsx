import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export interface Link {
  /**
   * @format color
   * @default #000000
   * @description Color of the link
   */
  color: string;
  /**
   * @description Font size of the link in desktop view
   */
  fontSize?: string;
  /**
   * @description Font weight of the link
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
   * @description Text alignment of the link
   */
  textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
  label: string;
  url: string;
}

export interface Props {
  logo: LiveImage;
  links?: Link[];
  gap?: string;
  /**
   * @format color
   * @default #ffffff
   * @description Color of the Background Left of the screen
   */
  backgroundColorLeft?: string;
  /**
   * @format color
   * @default #a0a0a0
   * @description Color of the Background Right of the screen
   */
  backgroundColorRight?: string;
  /**
   * @description Padding of the left side of the logo
   */
  paddingLeft?: string;
  /**
   * @description Padding of the right side of the logo
   */
  paddingRight?: string;
  /**
   * @description Flex alignment of the logo and links container
   */
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  /**
   * @description Flex alignment of the logo and links container
   * @default flex-start
   */
  justifyContentLeft?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  justifyContentRight?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  /**
   * @description Height of the right background
   */
  navHeight?: string;
}

export default function Nav(props: Props) {
  const [links] = useState<Array<Link>>(
    Array.isArray(props.links) ? props.links : [],
  );

  const {
    backgroundColorLeft,
    backgroundColorRight,
    paddingLeft,
    paddingRight,
    alignItems,
    justifyContentLeft,
    justifyContentRight,
    navHeight,
  } = props;

  const linkElements = links?.map((link) => (
    <li>
      <a
        href={link.url}
        class="whitespace-nowrap"
        style={{
          color: link.color || "#000000",
          fontSize: link.fontSize,
          fontWeight: link.fontWeight || "normal",
          textAlign: link.textAlign || "left",
        }}
      >
        {link.label || ""}
      </a>
    </li>
  ));

  const alignItemsStyle = {
    alignItems: alignItems || "center",
  };

  const leftDivStyle = {
    backgroundColor: backgroundColorLeft,
    padding: paddingLeft || "0px",
    height: navHeight,
    justifyContent: justifyContentLeft || "flex-start",
  };

  const rightDivStyle = {
    backgroundColor: backgroundColorRight,
    padding: paddingRight || "0px",
    height: navHeight,
    gap: props.gap || "0px",
    justifyContent: justifyContentRight || "flex-start",
  };

  return (
    <nav
      class="grid grid-cols-2 absolute w-full items-center relative z-10 shadow-[rgba(0,_0,_0,_0.24)_0px_1px_1px]"
      style={alignItemsStyle}
    >
      <div class="col-span-1 flex" style={leftDivStyle}>
        <Image
          src={props.logo}
          alt="Logo"
          className="w-[100px] h-[50px]"
          width={100}
          height={50}
        />
      </div>
      <ul class="col-span-1 flex h-full items-center" style={rightDivStyle}>
        {linkElements}
      </ul>
    </nav>
  );
}
