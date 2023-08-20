import { useEffect, useState } from "preact/hooks";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface SidebarContent {
  SidebarTitle?: string;
  Subtitle?: string;
  Icon?: LiveImage;
  AltIcon?: string;
  LinkSubtitle?: string;
  Topics?: Array<Topic>;
}

export interface Topic {
  SidebarLabel: string;
  LinkSidebarLabel?: string;
  SubTopics: Array<SubTopic>;
}

export interface SubTopic {
  Label: string;
  SidebarLink: string;
}

export default function Sidebar({
  SidebarTitle,
  Icon,
  AltIcon,
  Subtitle,
  LinkSubtitle,
  Topics,
}: SidebarContent) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    Topics?.forEach((topic, index) => {
      topic.SubTopics.forEach((subTopic) => {
        if (currentPath.includes(subTopic.SidebarLink)) {
          setOpenDropdownIndex(index);
        }
      });
    });
  }, []);

  return (
    <aside class="max-w-[284px] w-full border-r-2 border-[#D4DBD7]">
      <ul class="flex flex-col">
        <li class="flex items-center mb-[24px]">
          {Icon && Icon.length > 0 && (
            <figure>
              <Image src={Icon} alt={AltIcon} width={40} height={40} />
            </figure>
          )}
          <span class="text-[#2FD180] text-[28px] font-semibold leading-loose">
            {SidebarTitle}
          </span>
        </li>
        {Subtitle && Subtitle.length > 0 && (
          <a
            href={LinkSubtitle}
            class="text-blue-600 text-[15px] font-semibold leading-tight my-[8px]"
          >
            {Subtitle}
          </a>
        )}
        {Topics &&
          Topics.map((topic, index) => (
            <ul key={index} class="mt-2 mb-3 flex flex-col">
              <li class="flex items-center mb-2">
                <a
                  href={topic?.LinkSidebarLabel}
                  class="text-zinc-900 text-[15px] font-semibold leading-tight cursor-pointer mr-[7px]"
                  onClick={() =>
                    toggleDropdown(index)}
                >
                  {topic.SidebarLabel}
                </a>
                {topic.SubTopics && topic.SubTopics.length > 0 && (
                  <span class="w-5 h-5 p-1 bg-[#C9CECE] rounded-full text-white text-[13px] font-semibold leading-tight flex items-center justify-center">
                    {topic.SubTopics.length}
                  </span>
                )}
              </li>
              {openDropdownIndex === index && topic.SubTopics &&
                topic.SubTopics.length > 0 && (
                <ol
                  class="list-decimal font-semibold flex flex-col"
                  style={{ paddingLeft: "25px" }}
                >
                  {topic.SubTopics.map((subTopic, subIndex) => (
                    <li key={subIndex} class="py-2">
                      <a
                        href={subTopic.SidebarLink}
                        class="cursor-pointer flex flex-1 text-zinc-900 text-[15px] font-normal leading-tight"
                      >
                        {subTopic.Label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </ul>
          ))}
      </ul>
    </aside>
  );
}
