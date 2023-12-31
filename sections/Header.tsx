import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface HeaderProps {
  title?: string;
  links?: Link[];
  icon?: LiveImage;
}

export interface Link {
  icon?: LiveImage;
  width?: number;
  height?: number;
  label: string;
  url: string;
}

export default function Header(props: HeaderProps) {
  const { title, icon, links } = props;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const formatDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const Ul = ({ links }: { links?: Link[] }) => (
    <ul class="bg-[#70ffb9] flex flex-wrap gap-x-[40px] gap-y-[10px] items-center justify-center py-[5px]">
      {links?.map((link) => (
        <li class="duration-300 ease-in flex gap-x-[5px] hover:scale-110 items-baseline">
          <a
            href={link.url}
            class="font-semibold md:text-[1em] text-[#333] text-[1.2em]"
          >
            {link.label}
          </a>
          {link.icon
            ? (
              <Image
                src={link?.icon || ""}
                width={link?.width || 10}
                height={link?.height || 10}
                alt="icon"
              />
            )
            : null}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header class="bg-[#053535]">
      <nav class="bg-[#053535] grid grid-cols-1 lg:bg-[#70ffb9] lg:grid-cols-3 max-w-[1440px] md:grid-cols-2 mx-auto">
        <p class="bg-[#053535] flex font-bold items-center justify-center md:text-[1.5em] p-[5px] rounded-tr-full text-[1.6em] text-base-200">
          {title}
        </p>
        {links && !isMobile ? <Ul links={links} /> : null}
        <div class="bg-[#053535] flex gap-x-[10px] items-center justify-center px-[5px] py-[10px] rounded-tl-full">
          <p class="font-semibold md:text-[1em] text-[1.2em] text-base-200">
            {formatDate()}
          </p>
          <p class="flex gap-x-[10px] items-center">
            {icon
              ? (
                <span class="bg-[#70ffb9] flex h-[30px] h-[40px] items-center justify-center md:h-[30px] md:w-[30px] rounded-full w-[40px]">
                  <Image
                    src={props?.icon || ""}
                    width={20}
                    height={20}
                    class="h-[30px] md:h-[20px] md:w-[20px] w-[30px]"
                    alt="icon"
                  />
                </span>
              )
              : null}
          </p>
        </div>
      </nav>
      {links && isMobile ? <Ul links={links} /> : null}
    </header>
  );
}
