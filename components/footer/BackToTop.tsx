import Icon from "deco-sites/web/components/ui/Icon.tsx";

export default function BackToTop({ content }: { content?: string }) {
  return (
    <>
      {content && (
        <div class="flex items-center justify-center w-full">
          <a href="#top" class="btn">
            {content} <Icon id="ChevronUp" width={24} height={24} />
          </a>
        </div>
      )}
    </>
  );
}
