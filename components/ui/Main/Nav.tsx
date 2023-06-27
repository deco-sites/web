import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

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
   * @description Main color of the screen
   * @default #ffffff
   * @format color
   */
  navColor?: string;
  /**
   * @color color
   * @default #000000
   * @description Color of the shadow nav
   */
  boxShadowColor?: string;
  /**
   * @description Height of nav
   */
  navHeight?: string;
  iconOpenButton: LiveImage;
  iconCloseButton: LiveImage;
  /**
   * @format color
   * @description Background of the button open/close menu
   */
  backgroundButton?: string;
  /**
   * @description Border Top of the nav
   */
  borderTop?: string;
  /**
   * @description Border Bottom of the nav
   */
  borderBottom?: string;
  /**
   * @format color
   * @default #000000
   * @description Color of the border
   */
  borderColor?: string;
  /**
   * @description Padding of the Nav Mobile
   */
  padding?: string;
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
}

export default function Nav(props: Props) {
  const [links] = useState<Link[]>(
    Array.isArray(props.links) ? props.links : [],
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [menuOpen]);

  const {
    navColor,
    boxShadowColor,
    backgroundButton,
    borderTop,
    borderBottom,
    borderColor,
    padding,
    paddingLeft,
    paddingRight,
    alignItems,
    justifyContentLeft,
    justifyContentRight,
    navHeight,
  } = props;

  const linkElements = links.map((link) => (
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

  const navItemsStyle = {
    backgroundColor: navColor || "#ffffff",
    boxShadow: boxShadowColor || "none",
    alignItems: alignItems || "center",
  };

  const navItemsMobileStyle = {
    backgroundColor: navColor || "#ffffff",
    alignItems: alignItems || "center",
    borderTop: borderTop || "none",
    borderBottom: borderBottom || "none",
    borderColor: borderColor || "transparent",
    padding: padding || "0px",
    transform: "translateY(0%)",
  };

  const buttonStyle = {
    backgroundColor: backgroundButton || "#ffffff",
  };

  const leftDivStyle = {
    padding: paddingLeft || "0px",
    height: navHeight,
    justifyContent: justifyContentLeft || "flex-start",
  };

  const rightDivStyle = {
    padding: paddingRight || "0px",
    height: navHeight,
    gap: props.gap || "0px",
    justifyContent: justifyContentRight || "flex-start",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      class="grid grid-cols-2 absolute w-full items-center relative z-10"
      style={navItemsStyle}
    >
      <div
        class={`col-span-1 flex`}
        style={leftDivStyle}
      >
        <a href={links[0].url}>
          <figure>
            <Image
              src={props.logo}
              alt="Logo"
              class="min-w-[100px] h-[50px]"
              width={100}
              height={50}
            />
          </figure>
        </a>
      </div>

      {menuOpen && (
        <div class="fixed inset-0 z-10 bg-opacity-75 backdrop-filter backdrop-blur">
          <div
            class="fixed inset-x-0 top-0 max-h-screen overflow-auto transition-transform duration-300"
            style={navItemsMobileStyle}
          >
            <ul
              class={`col-span-1 flex md:flex-row flex-col h-full md:items-center`}
              style={rightDivStyle}
            >
              {linkElements}
            </ul>
          </div>
        </div>
      )}
      <button
        class="absolute top-0 right-0 h-full p-2 flex items-center z-20"
        style={buttonStyle}
        onClick={toggleMenu}
        aria-label="Close/Open Menu"
      >
        {menuOpen
          ? (
            <figure>
              <Image
                src={props.iconCloseButton}
                alt="icon close menu"
                class="w-8 h-8"
                width={32}
                height={32}
              />
            </figure>
          )
          : (
            <figure>
              <Image
                src={props.iconOpenButton}
                alt="icon open menu"
                class="w-8 h-8"
                width={32}
                height={32}
              />
            </figure>
          )}
      </button>
    </nav>
  );
}
