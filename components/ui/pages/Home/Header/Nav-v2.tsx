// import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
// import Image from "deco-sites/std/components/Image.tsx";
// import Icon from "deco-sites/web/components/ui/Icon.tsx";

// export interface Link {
//   label?: string;
//   href?: string;
// }

// export interface Props {
//   logo?: LiveImage;
//   alt?: string;
//   links: Array<Link>;
// }

// export default function Nav(props: Props) {
//   return (
//     <header class="max-w-8xl mx-auto">
//       <nav class="grid grid-cols-3 grid-flow-row auto-rows-fr items-center top-0 fixed w-full h-[60px] bg-[#d0ffd5] py-2 px-8 shadow-[3px_1px_19px_9px_#11cd0473] z-10">
//         {props.logo && (
//           <figure>
//             <Image src={props.logo} alt={props.alt} width={40} height={40} />
//           </figure>
//         )}
//         <div class="flex items-center">
//           <input
//             type="search"
//             name="search"
//             placeholder="Search"
//             class="w-full py-[8px] pr-[16px] pl-[48px] rounded-[52px] border border-[#bababa] placeholder-[#5a5f5d] text-[15px] relative focus:outline-none focus:border-[#64EF74]"
//           />
//           <Icon
//             id="MagnifyingGlass"
//             size={20}
//             strokeWidth={0.01}
//             class="absolute ml-[16px] w-5 h-5 p-[1.67px] fill-current text-[#424242] focus:outline-none"
//           />
//         </div>
//         {!!props.links?.length && (
//           <ul class="flex flex-col md:flex-row justify-end gap-2 md:gap-4">
//             {props.links.map(({ href, label }) => (
//               <li>
//                 <a
//                   target="_blank"
//                   href={href}
//                   aria-label={label}
//                   class="no-underline font-medium text-[#424242]"
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import Search from "deco-sites/web/components/ui/pages/Home/Header/Search.tsx";

export interface Link {
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
  visible?: boolean;
  iconOpenButton: LiveImage;
  iconCloseButton: LiveImage;
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
  alt?: string;
  links?: Link[];
  nav?: Nav;
}

export default function Nav(props: Props) {
  const [links] = useState<Link[]>(
    Array.isArray(props.links) ? props.links : [],
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const shouldRenderSearchMobile = () => {
    return windowWidth <= 1024;
  };

  const shouldRenderSearchDesktop = () => {
    return windowWidth >= 1024;
  };

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

      setWindowWidth(window.innerWidth);
    };

    handleResize();

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
      body.style.overflow = "";
    };
  }, [menuOpen]);

  const {
    justifyContentLeft,
  } = props.nav || {};

  const linkElements = links.map((link, index) => (
    <li key={index}>
      <a
        href={link?.url}
        class="whitespace-nowrap relative text-white"
        style={{
          fontSize: link.fontSize,
          fontWeight: link.fontWeight || "normal",
          textAlign: link.textAlign || "left",
        }}
      >
        {link.label || ""}
        <span className="absolute left-0 -bottom-1 w-full h-px -z-10">
        </span>
      </a>
    </li>
  ));

  const leftDivStyle = {
    justifyContent: justifyContentLeft || "flex-start",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav class="grid grid-cols-3 grid-flow-row auto-rows-fr items-center top-0 fixed w-full bg-[#d0ffd5] py-2 px-8 shadow-[3px_1px_1px_3px_#8ee188] z-10">
        <div class={`col-span-1 flex`} style={leftDivStyle}>
          <a href={links[0]?.url}>
            <figure>
              <Image
                src={props.logo ?? ""}
                alt={props.alt ?? ""}
                class="min-w-[35px] h-[35px]"
                width={35}
                height={35}
              />
            </figure>
          </a>
        </div>
        {shouldRenderSearchDesktop() && <Search />}
        <div
          class={`fixed inset-0 z-10 bg-opacity-75 backdrop-filter backdrop-blur ${
            menuOpen
              ? "md:left-[85%] left-0 transition-all duration-500 ease"
              : "left-[100%] transition-all duration-500 ease"
          }`}
        >
          <div class=" flex justify-center fixed inset-x-0 top-0 max-h-screen overflow-hidden md:w-[100%] md:h-full md:border-l-2 md:border-b-0 border-l-0 border-b-2 border-[#64EF7A] bg-gradient-green">
            <ul
              class={`col-span-1 flex flex-col h-full justify-center items-center gap-5 py-[70px] px-4 w-full`}
            >
              {shouldRenderSearchMobile() && <Search class="w-full" />}
              {linkElements}
            </ul>
          </div>
        </div>
        <div>
          <button
            class="absolute top-0 right-0 h-full py-2 pl-2 pr-8 flex items-center z-20"
            style={{ display: props.nav?.visible ? "" : "none" }}
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
        </div>
      </nav>
    </header>
  );
}
