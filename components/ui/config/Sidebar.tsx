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

const isTopicActive = (
  currentSlug: string | null,
  topic: Topic,
  openTopicIndex: number | null,
  index: number,
): boolean => {
  const linkSlug = topic.LinkSidebarLabel?.split("/").pop()?.toLowerCase();
  const isActiveTopic = currentSlug === linkSlug ||
    topic.SubTopics.some(
      (subTopic) =>
        subTopic.SidebarLink?.split("/").pop()?.toLowerCase() === currentSlug,
    );
  const isOpen = openTopicIndex === index || isActiveTopic;

  return isOpen;
};

const isSubTopicActive = (
  currentSlug: string | null,
  subTopic: SubTopic,
): boolean => {
  const subTopicSlug = subTopic.SidebarLink?.split("/").pop()?.toLowerCase();
  const isActiveSubTopic = currentSlug === subTopicSlug;
  return isActiveSubTopic;
};

export default function Sidebar({
  SidebarTitle,
  Icon,
  AltIcon,
  Subtitle,
  LinkSubtitle,
  Topics,
}: SidebarContent) {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const slug = pathParts[pathParts.length - 1].toLowerCase();
    setCurrentSlug(slug);
  }, []);

  const subtitleSlug = LinkSubtitle?.split("/").pop()?.toLowerCase();

  const toggleTopicMenu = (index: number) => {
    if (openTopicIndex === index) {
      setOpenTopicIndex(null);
    } else {
      setOpenTopicIndex(index);
    }
  };

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
            class={`${
              currentSlug === subtitleSlug ? "text-blue-600" : "text-zinc-900"
            } text-[15px] font-semibold leading-tight my-[8px]`}
          >
            {Subtitle}
          </a>
        )}
        {Topics &&
          Topics.map((topic, index) => {
            const isActive = isTopicActive(
              currentSlug,
              topic,
              openTopicIndex,
              index,
            );
            return (
              <ul key={index} class="mt-2 mb-3 flex flex-col pr-[40px]">
                <li
                  class="flex items-center mb-2 cursor-pointer"
                  onClick={() => toggleTopicMenu(index)}
                >
                  <a
                    href={topic?.LinkSidebarLabel}
                    class="text-zinc-900 text-[15px] font-semibold leading-tight cursor-pointer mr-[7px]"
                  >
                    {topic.SidebarLabel}
                  </a>
                  {topic.SubTopics && topic.SubTopics.length > 0 && (
                    <span class="w-5 h-5 p-1 bg-[#C9CECE] rounded-full text-white text-[13px] font-semibold leading-tight flex items-center justify-center">
                      {topic.SubTopics.length}
                    </span>
                  )}
                </li>
                {topic.SubTopics &&
                  topic.SubTopics.length > 0 && (
                  <ol
                    class={`font-semibold flex flex-col ${
                      isActive ? "block" : "hidden"
                    }`}
                    style={{ paddingLeft: "25px" }}
                  >
                    {topic.SubTopics.map((subTopic, subIndex) => {
                      const isActiveSubTopic = isSubTopicActive(
                        currentSlug,
                        subTopic,
                      );

                      return (
                        <li
                          key={subIndex}
                          class={`py-2 list-decimal cursor-pointer ${
                            isActiveSubTopic
                              ? "text-[#2E6ED9]"
                              : "text-zinc-900 relative w-min-content before:h-full before:absolute before:bottom-0 hover:before:w-full hover:before:left-0   hover:before:bg-[#F8F9F5] z-10 before:-z-10"
                          }`}
                        >
                          <a
                            href={subTopic.SidebarLink}
                            class={`flex flex-1 text-[15px] font-normal leading-tight `}
                          >
                            {subTopic.Label}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                )}
              </ul>
            );
          })}
      </ul>
    </aside>
  );
}
