import Image from "apps/website/components/Image.tsx";
import Header from "deco-sites/web/components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Image {
  image: ImageType;
  link?: string;
  altText: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

const IMAGES = [
  {
    altText: "deco",
    link: "",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    altText: "deco",
    link: "",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Logos(props: Props) {
  const {
    title,
    description,
    images,
    layout,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="container flex flex-col gap-8 lg:gap-12 lg:px-0 lg:py-10 px-4 py-8 w-full">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="items-center text-center w-full">
        {list.map((element) => (
          <div class="align-middle h-17 inline-block lg:h-20 lg:px-6 lg:py-4 lg:w-40 px-4 py-6 w-36">
            <div class="flex h-full items-center justify-center w-full">
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                <Image
                  width={300}
                  height={300}
                  src={element.image}
                  alt={element.altText || ""}
                  class="max-h-full max-w-full"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;
