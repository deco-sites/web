import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface SearchProps {
  placeholder?: string;
  icon?: LiveImage;
  links?: Links[];
  button?: string;
  buttonIcon?: LiveImage;
}

export interface Links {
  label: string;
  url: string;
}

export default function Search(props: SearchProps) {
  const { placeholder, icon, links } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  const createPlaceholderStructure = () => {
    return (
      <ul class="flex h-full items-center justify-center relative">
        <li class="flex items-center justify-center relative w-[95%]">
          <input
            type="text"
            class="bg-[#053535] focus:outline-none h-[40px] lg:ml-[20px] md:bg-[#c9f888] md:my-[5px] md:placeholder-[#333] py-[5px] md:text-[#333] mt-[5px] pl-[15px] placeholder-white pr-[40px] pt-[5px] rounded-[30px] shadow-box-shadow-1 text-white w-full"
            placeholder={placeholder}
          />
          <div class="absolute bg-[#053535] flex h-[30px] items-center justify-center p-[5px] right-[5px] rounded-full w-[30px]">
            <Image src={icon || ""} width={20} height={20} alt="icon search" />
          </div>
        </li>
        <span class="hidden lg:block w-[5%]">
          <hr class=" border-[#00ff80] h-full relative" />
        </span>
      </ul>
    );
  };

  const createLinksStructure = () => {
    return (
      <ul class="flex flex-col h-full items-center justify-center md:bg-[#053535] md:flex-row">
        <span class="hidden md:block w-1/5">
          <hr class="border-[#00ff80] h-full relative" />
        </span>
        <li class="md:w-4/5 w-full">
          <ul class="bg-[#00ff80] flex flex-col flex-wrap gap-x-[40px] h-auto items-center justify-center md:flex-row md:h-[40px] md:shadow-box-shadow-1 relative rounded-[30px]">
            {links?.slice(0, 3).map((link, index) => (
              <li
                key={index}
                class="flex justify-center md:justify-start md:w-auto w-full"
              >
                <a
                  href={link.url}
                  class="font-semibold md:text-[1em] text-[#333] text-[1.2em] lg:py-0 py-[10px] duration-300 ease-in lg:hover:scale-110"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <span class="hidden md:block w-1/5">
          <hr class=" border-[#00ff80] h-full relative" />
        </span>
      </ul>
    );
  };

  return (
    <div class="bg-[#053535]">
      <div class="grid grid-cols-1 lg:grid-cols-3 max-w-[1440px] mx-auto">
        <>
          {!isMobile
            ? (
              <li>
                {createPlaceholderStructure()}
              </li>
            )
            : null}
        </>
        <>{!isMobile ? <li>{createLinksStructure()}</li> : null}</>
        <ul class="bg-[#053535] flex flex-col flex-wrap gap-x-[40px] gap-y-[10px] items-center relative">
          {links && links.length > 3 && (
            <li class="flex items-center justify-center lg:justify-start my-[5px] w-full">
              <span class="hidden lg:block w-2/5">
                <hr class="border-[#00ff80] h-full relative" />
              </span>
              <div class="bg-[#00ff80] lg:w-1/5 p-[5px] rounded-[30px] w-1/2">
                <button
                  class="bg-[#053535] flex font-semibold gap-[10px] items-center justify-center md:text-[1em] px-[10px] py-[5px] rounded-[30px] text-[1.2em] text-white w-full"
                  onClick={toggleMenu}
                >
                  {props.button}
                  <Image
                    src={props.buttonIcon || ""}
                    width={20}
                    height={20}
                    alt={`${props.button} Button Icon`}
                  />
                </button>
              </div>
            </li>
          )}
          {showMenu && (
            <>
              <ul class="absolute bg-[#00ff80] flex flex-col items-center justify-center lg:max-w-[300px] lg:top-[54px] min-w-[200px] px-[10px] lg:rounded-b-[20px] shadow-box-shadow-2 top-[52px] w-full z-20">
                <>
                  {isMobile
                    ? (
                      <li class="w-full">
                        {createPlaceholderStructure()}
                      </li>
                    )
                    : null}
                </>
                <>
                  {isMobile
                    ? <li class="w-full">{createLinksStructure()}</li>
                    : null}
                </>
                {links?.slice(3).map((link) => (
                  <li class="border-[#053535] border-b flex justify-center w-full py-[10px]">
                    <a
                      href={link.url}
                      class="duration-300 ease-in font-semibold lg:hover:scale-110 md:text-[1em] text-[#333] text-[1.2em]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
