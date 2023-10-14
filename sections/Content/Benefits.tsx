import Icon, { AvailableIcons } from "deco-sites/web/components/ui/Icon.tsx";
import Header from "deco-sites/web/components/ui/SectionHeader.tsx";

export interface Props {
  title?: string;
  description?: string;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "",
    description = "",
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
    }, {
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
    }, {
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
    }],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const showDivider = index < benefits.length - 1;
    const reverse = layout?.variation === "Color reverse";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <div
        class={`${
          reverse ? "bg-primary text-primary-content p-4 lg:px-8 lg:py-4" : ""
        } flex gap-4 ${
          benefitLayout == "piledup" ? "flex-col items-center text-center" : ""
        } ${
          showDivider && benefitLayout !== "piledup"
            ? "border-b border-neutral-300"
            : ""
        } ${showDivider ? "pb-4 lg:pr-8 lg:border-r lg:border-b-0" : ""} ${
          showDivider && !reverse ? "lg:pb-0" : ""
        }`}
      >
        <div class="flex-none">
          <Icon
            id={benefit.icon}
            class={reverse ? "text-base-100" : "text-primary"}
            width={36}
            height={36}
            strokeWidth={0.01}
            fill="currentColor"
          />
        </div>
        <div class="flex flex-auto flex-col gap-1 lg:gap-2">
          <div
            class={`text-base lg:text-xl leading-7 ${
              reverse ? "text-base-100" : "text-base-content"
            }`}
          >
            {benefit.label}
          </div>
          <p
            class={`text-sm leading-5 ${
              reverse ? "text-base-100" : "text-neutral"
            } ${benefitLayout == "piledup" ? "hidden lg:block" : ""}`}
          >
            {benefit.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div class="container flex flex-col gap-8 lg:gap-10 lg:px-0 lg:py-10 px-4 py-8 w-full">
            <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="flex justify-center w-full">
              <div class="auto-cols-fr flex flex-col gap-4 grid-flow-col lg:gap-8 lg:grid w-full">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "With border" && (
        <div class="container flex flex-col gap-8 lg:gap-10 lg:px-0 lg:py-10 px-4 py-8 w-full">
          <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          />
          <div class="flex justify-center w-full">
            <div class="border border-base-300 gap-4 grid grid-cols-2 lg:auto-cols-fr lg:gap-8 lg:grid-flow-col lg:p-10 px-4 py-6 w-full">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
      {layout?.variation === "Color reverse" && (
        <div class="container flex flex-col gap-8 lg:gap-10 lg:px-0 lg:py-10 px-4 py-8 w-full">
          <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          />
          <div class="flex justify-center w-full">
            <div class="gap-4 grid grid-cols-2 lg:auto-cols-fr lg:gap-8 lg:grid-flow-col w-full">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
