import PoweredBy from "deco-sites/web/components/ui/pages/Home/Footer/PoweredBy.tsx";

export interface Props {
  text?: string;
}

export default function Footer(props: Props) {
  return (
    <footer class="w-full p-4 bg-[#2c313f]">
      <div class="max-w-[1440px] mx-auto w-full p-[10px] flex items-center justify-between">
        <PoweredBy />
        <h2 class="text-white">{props.text}</h2>
      </div>
    </footer>
  );
}
