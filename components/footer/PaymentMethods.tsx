import Icon from "deco-sites/web/components/ui/Icon.tsx";

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa";
}

export default function PaymentMethods(
  { content }: { content?: { title?: string; items?: PaymentItem[] } },
) {
  return (
    <>
      {content && content.items && content.items.length > 0 && (
        <div class="flex flex-col gap-4">
          {content.title && <h3 class="text-lg">{content.title}</h3>}
          <ul class="flex flex-wrap gap-4 items-center">
            {content.items.map((item) => {
              return (
                <li
                  class="border"
                  title={item.label}
                >
                  <Icon
                    width={48}
                    height={32}
                    strokeWidth={1}
                    id={item.label}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
