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

export interface Nav {
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
  navPosition?: "fixed" | "relative";
  iconOpenButton: LiveImage;
  iconCloseButton: LiveImage;
  /**
   * @format color
   * @description Background of the button open/close menu
   */
  backgroundButton?: string;
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

export interface Props {
  logo: LiveImage;
  links?: Link[];
  nav?: Nav;
}

export default function Nav(props: Props) {
  const [links] = useState<Link[]>(
    Array.isArray(props.links) ? props.links : [],
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (menuOpen) {
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "";
        }
      } else {
        body.style.overflow = "";
      }
    };

    handleResize();

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
      body.style.overflow = "";
    };
  }, [menuOpen]);

  const {
    navColor,
    boxShadowColor,
    backgroundButton,
    padding,
    paddingLeft,
    paddingRight,
    alignItems,
    justifyContentLeft,
    justifyContentRight,
    navHeight,
    navPosition,
  } = props.nav || {};

  const linkElements = links.map((link) => (
    <li>
      <a
        href={link?.url}
        class="whitespace-nowrap relative group"
        style={{
          color: link.color || "#000000",
          fontSize: link.fontSize,
          fontWeight: link.fontWeight || "normal",
          textAlign: link.textAlign || "left",
        }}
      >
        {link.label || ""}
        <span className="absolute left-0 -bottom-1 w-full h-px bg-[#05FF00] -z-10 group-hover:h-full group-hover:transition-all">
        </span>
      </a>
    </li>
  ));

  const navItemsStyle = {
    backgroundColor: navColor || "#ffffff",
    boxShadow: boxShadowColor || "none",
    alignItems: alignItems || "center",
    position: navPosition || "relative",
  };

  const navItemsMobileStyle = {
    backgroundColor: navColor || "#ffffff",
    alignItems: alignItems || "center",
    padding: padding || "0px",
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
    gap: props.nav?.gap || "0px",
    justifyContent: justifyContentRight || "flex-start",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      class="flex justify-between w-full items-center relative z-10"
      style={navItemsStyle}
    >
      <div
        class={`col-span-1 flex`}
        style={leftDivStyle}
      >
        <a href={links[0]?.url}>
          <figure>
            <Image
              src={props.logo ?? ""}
              alt="Logo"
              class="min-w-[100px] h-[50px]"
              width={100}
              height={50}
            />
          </figure>
        </a>
      </div>
      <div
        class={`fixed inset-0 z-10 bg-opacity-75 backdrop-filter backdrop-blur ${
          menuOpen
            ? "md:left-[85%] left-0  transition-all duration-500 ease"
            : "left-[100%] transition-all duration-500 ease"
        }`}
      >
        <div
          class="fixed inset-x-0 top-0 max-h-screen overflow-auto md:w-[100%] md:h-full md:border-l-4 md:border-b-0 md:border-[#64EF7A] border-l-0 border-b-4 border-[#64EF7A]"
          style={navItemsMobileStyle}
        >
          <ul
            class={`col-span-1 flex flex-col h-full md:items-center`}
            style={rightDivStyle}
          >
            {linkElements}
          </ul>
        </div>
      </div>
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
                src={props.nav?.iconCloseButton ?? ""}
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
                src={props.nav?.iconOpenButton ?? ""}
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
