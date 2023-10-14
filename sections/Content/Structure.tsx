import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";
import { readFileSync } from "node:fs";


export default function MarkdownContainer() {
  const content = readFileSync("./sections/Pages/page.mdx", "utf8");
  return (
    <div class="leading-[1.8] lg:max-w-2xl md:px-0 mx-auto pt-10 px-5 text-[#66736C]">
      <section class="markdown-container">
        {marky(content)}
      </section>
    </div>
  );
}
