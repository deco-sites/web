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
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const slug = pathParts[pathParts.length - 1].toLowerCase();
    setCurrentSlug(slug);
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
          Topics.map((topic, index) => {
            const linkSlug = topic.LinkSidebarLabel?.split("/").pop()
              ?.toLowerCase();
            const isActiveTopic = currentSlug === linkSlug ||
              topic.SubTopics.some((subTopic) =>
                subTopic.SidebarLink?.split("/").pop()?.toLowerCase() ===
                  currentSlug
              );
            return (
              <ul key={index} class="mt-2 mb-3 flex flex-col">
                <li class="flex items-center mb-2">
                  <a
                    href={topic?.LinkSidebarLabel}
                    class={`text-zinc-900 text-[15px] font-semibold leading-tight cursor-pointer mr-[7px]`}
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
                    class={`list-decimal font-semibold flex flex-col ${
                      isActiveTopic ? "block" : "hidden"
                    }`}
                    style={{ paddingLeft: "25px" }}
                  >
                    {topic.SubTopics.map((subTopic, subIndex) => {
                      const subTopicSlug = subTopic.SidebarLink?.split("/")
                        .pop()?.toLowerCase();
                      const isActiveSubTopic = currentSlug === subTopicSlug;

                      return (
                        <li key={subIndex} class="py-2">
                          <a
                            href={subTopic.SidebarLink}
                            class={`cursor-pointer flex flex-1 text-[15px] font-normal leading-tight ${
                              isActiveSubTopic
                                ? "text-[#2E6ED9]"
                                : "text-zinc-900"
                            }`}
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
