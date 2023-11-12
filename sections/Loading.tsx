import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  preloader?: LiveImage;
  alt?: string;
}

export default function Loading(props: Props) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setLoading(false);

        if (typeof document !== "undefined") {
          document.body.style.overflow = "auto";
        }
      }
      setProgress(currentProgress);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const progressBarStyle = {
    width: `${progress}%`,
    background: `linear-gradient(90deg, #70ffb9 ${
      100 - progress
    }%, #2E7D32 ${progress}%)`,
  };

  if (loading) {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
    return (
      <section class="bg-[#053535] fixed flex flex-col h-full items-center justify-center left-0 overflow-hidden top-0 w-full z-50">
        <figure class="-top-[50px] relative">
          <Image
            src={props.preloader || ""}
            width={100}
            height={100}
            alt={props.alt}
          />
        </figure>
        <div class="bg-white border border-[#70ffb9] h-[4px] lg:w-2/5 overflow-hidden relative rounded-full w-1/2">
          <div class="absolute h-full left-0 top-0" style={progressBarStyle}>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
