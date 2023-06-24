import { context } from "$live/live.ts";
import Main from "deco-sites/web/components/ui/Main/Main.tsx";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function Home({ enableInspectVSCode }: Props) {
  return (
    <section>
      {enableInspectVSCode && !context.deploymentId && (
        <div class="flex items-center justify-between flex-col">
          <Main firstVideo="" secondVideo="" />
        </div>
      )}
    </section>
  );
}
