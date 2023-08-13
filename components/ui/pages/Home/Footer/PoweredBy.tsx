import Icon from "deco-sites/web/components/ui/Icon.tsx";

export default function PoweredBy() {
  return (
    <span class="flex items-center gap-1 text-sm text-white">
      Powered by{" "}
      <a
        href="https://www.deco.cx"
        aria-label="powered by https://www.deco.cx"
      >
        <Icon
          id="Deco"
          height={20}
          width={60}
          strokeWidth={0.01}
          style={{ color: "white" }}
        />
      </a>
    </span>
  );
}
