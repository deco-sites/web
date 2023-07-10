// import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
// import Image from "deco-sites/std/components/Image.tsx";

// export interface Logo {
//   image: LiveImage;
//   height?: string;
//   name?: string;
// }

// export interface Props {
//   title?: string;
//   platform?: Logo[];
//   sites?: Logo[];
// }

// export default function Generic(props: Props) {
//   const gradientStyle = {
//     backgroundImage:
//       "linear-gradient(#d8c5a8, #eccb88 50%, #3678e9 50%, #5d9bb8 100%, #5d9bb8 100%)",
//   };

//   const Platform = props.platform?.map((platform) => (
//     <li>
//       <Image
//         src={platform.image || ""}
//         alt="logo"
//         class="w-full"
//         style={{ height: `${platform?.height || ""}` }}
//         width={200}
//         height={50}
//       />
//     </li>
//   ));

//   const Sites = props.sites?.map((site) => (
//     <li>
//       <Image
//         src={site.image || ""}
//         alt="logo"
//         class="w-full"
//         style={{ height: `${site?.height || ""}` }}
//         width={200}
//         height={50}
//       />
//     </li>
//   ));

//   return (
//     <div
//       class="w-full min-h-[770px]"
//       style={gradientStyle}
//     >
//       <div class="max-w-[1280px] mx-auto w-full md:py-[80px] py-[40px] flex flex-col items-center justify-center">
//         <h2>{props.title}</h2>
//         <ul class="flex flex-wrap items-center gap-[20px]">
//           <li>
//             {props.platform && props.platform.length > 0 && (
//               <div>
//                 <h3>
//                   {props.platform.map((platform) => (
//                     <span>{platform.name}</span>
//                   ))}
//                 </h3>
//                 <ul class="flex flex-wrap items-center gap-[20px]">
//                   {Platform}
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li>
//             {props.sites && props.sites.length > 0 && (
//               <div>
//                 <h3>
//                   {props.sites.map((site) => <span>{site.name}</span>)}
//                 </h3>
//                 <ul class="flex flex-wrap items-center gap-[20px]">
//                   {Sites}
//                 </ul>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Image {
  image: LiveImage;
  link?: string;
  height?: string;
  name?: string;
  fontSizeName?: string;
  fontWeightName?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
}

export interface Work {
  platform?: Image[];
  sites?: Image[];
}

export interface Props {
  title?: string;
  fontSizeTitle?: string;
  fontWeightTitle?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
  works?: Work[];
}

export default function Works(props: Props) {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(#d8c5a8, #eccb88 50%, #3678e9 50%, #5d9bb8 100%, #5d9bb8 100%)",
  };

  const {
    fontSizeTitle = "",
    fontWeightTitle = "normal",
  } = props || {};

  return (
    <div class="w-full min-h-[770px]" style={gradientStyle}>
      <div class="max-w-[1280px] mx-auto w-full md:pt-[70px] md:pb-0 pt-[40px] px-[20px] flex flex-col items-center justify-center gap-[40px]">
        <h2
          class="bg-[#00ff5e]"
          style={{ fontSize: fontSizeTitle, fontWeight: fontWeightTitle }}
        >
          {props.title}
        </h2>
        {props.works && props.works.length > 0 && (
          <ul class="flex flex-col items-center gap-[20px] w-full">
            {props.works.map((work) => (
              <>
                {work.platform && work.platform.length > 0 && (
                  <li class="flex flex-col items-center gap-[10px] w-full">
                    <h3
                      style={{
                        fontSize: work.platform[0]?.fontSizeName || "",
                        fontWeight: work.platform[0]?.fontWeightName ||
                          "normal",
                      }}
                    >
                      <span>{work.platform[0]?.name || ""}</span>
                    </h3>
                    <ul class="flex flex-wrap items-center justify-center gap-[40px]">
                      {work.platform.map((platform) => (
                        <li>
                          <a href={platform.link || ""}>
                            <Image
                              src={platform.image || ""}
                              alt="logo"
                              class="w-full"
                              style={{ height: `${platform.height || ""}` }}
                              width={200}
                              height={50}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {work.sites && work.sites.length > 0 && (
                  <li class="flex flex-col items-center gap-[10px] w-full">
                    <h3
                      style={{
                        fontSize: work.sites[0]?.fontSizeName || "",
                        fontWeight: work.sites[0]?.fontWeightName || "normal",
                      }}
                    >
                      <span>{work.sites[0]?.name || ""}</span>
                    </h3>
                    <ul class="flex flex-wrap items-center justify-center gap-[40px]">
                      {work.sites.map((site) => (
                        <li>
                          <a href={site.link || ""}>
                            <Image
                              src={site.image || ""}
                              alt="logo"
                              class="w-full"
                              style={{ height: `${site.height || ""}` }}
                              width={200}
                              height={50}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
