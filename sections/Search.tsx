import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const createPlaceholderStructure = () => {
    return (
      <div class="flex items-center justify-center relative">
        <div class="flex items-center justify-center relative w-[95%]">
          <input
            type="text"
            class="bg-[#c9f888] focus:outline-none h-[40px] lg:ml-[20px] my-[5px] pl-[15px] placeholder-[#333] pr-[40px] py-[5px] rounded-[30px] shadow-box-shadow-1 text-[#333] w-full"
            placeholder={placeholder}
          />
          <div class="absolute bg-[#053535] flex h-[30px] items-center justify-center p-[5px] right-[5px] rounded-full w-[30px]">
            <Image src={icon || ""} width={20} height={20} alt="icon" />
          </div>
        </div>
        <div class="hidden lg:block w-[5%]">
          <hr class=" border-[#00ff80] h-full relative" />
        </div>
      </div>
    );
  };

  const createLinksStructure = () => {
    return (
      <div class="bg-[#053535] flex items-center justify-center">
        <div class="w-1/5">
          <hr class="border-[#00ff80] h-full relative" />
        </div>
        <div class="w-4/5">
          <ul class="bg-[#00ff80] flex flex-wrap gap-x-[40px] gap-y-[10px] h-[40px] items-center justify-center relative rounded-[30px] shadow-box-shadow-1">
            {links?.slice(0, 3).map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  class="font-semibold hover:border-[#053535] hover:border-b-4 pb-[6px] text-[#333] text-[1em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="w-1/5">
          <hr class=" border-[#00ff80] h-full relative" />
        </div>
      </div>
    );
  };

  return (
    <div class="bg-[#053535]">
      <div class="grid grid-cols-1 lg:grid-cols-3 max-w-[1440px] mx-auto">
        {createPlaceholderStructure()}
        {createLinksStructure()}
        <ul class="bg-[#053535] flex flex-col flex-wrap gap-x-[40px] gap-y-[10px] items-center relative">
          {links && links.length > 3 && (
            <div class="flex items-center justify-center lg:justify-start my-[5px] w-full">
              <div class="hidden lg:block w-2/5">
                <hr class="border-[#00ff80] h-full relative" />
              </div>
              <div class="bg-[#00ff80] lg:w-1/5 rounded-[30px]">
                <button
                  class="bg-[#053535] flex font-semibold gap-[10px] items-center m-[5px] px-[10px] py-[5px] rounded-[30px] text-[1em] text-white"
                  onClick={toggleMenu}
                >
                  {props.button}
                  <Image
                    src={props.buttonIcon || ""}
                    width={20}
                    height={20}
                    alt={props.button}
                  />
                </button>
              </div>
            </div>
          )}
          {showMenu && (
            <ul class="absolute bg-[#00ff80] flex flex-col gap-y-[10px] items-center justify-center lg:max-w-[300px] lg:top-[54px] min-w-[200px] p-[10px] rounded-b-[20px] shadow-box-shadow-2 top-[45px] w-full z-20">
              {links?.slice(3).map((link) => (
                <li class="border-[#053535] border-b flex justify-center pb-[5px] w-full">
                  <a
                    href={link.url}
                    class="duration-300 ease-in font-semibold hover:scale-110 text-[#333] text-[1em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
