import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Link {
  label?: string;
  href?: string;
}

export interface Props {
  logo: LiveImage;
  alt: string;
  links: Array<Link>;
}

export default function Nav(props: Props) {
  return (
    <header class="max-w-8xl mx-auto h-[60px]">
      <nav class="flex justify-between items-center top-0 fixed inset-0 z-10 bg-opacity-75 backdrop-filter backdrop-blur h-[60px] border-b border-slate-900/10 py-4 px-8">
        <figure>
          <Image src={props.logo} alt={props.alt} width={110} height={60} />
        </figure>
        {!!props.links?.length && (
          <ul class="flex flex-col md:flex-row gap-2 md:gap-4">
            {props.links.map(({ href, label }) => (
              <li>
                <a
                  target="_blank"
                  href={href}
                  aria-label={label}
                  class="no-underline font-bold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
