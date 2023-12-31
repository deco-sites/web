export type Item = {
  label: string;
  href: string;
};

export default function ExtraLinks({ content }: { content?: Item[] }) {
  return (
    <>
      {content && content?.length > 0 && (
        <div class="flex flex-col gap-5 lg:gap-10 md:flex-row">
          {content.map((item) => (
            <a class="link text-sm" href={item.href}>{item.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
