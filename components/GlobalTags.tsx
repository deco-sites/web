import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />
    <style
  dangerouslySetInnerHTML={{
    __html: `
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
     

      @font-face {
        font-family: "PP Hatton Medium";
        src: url("https://db.onlinewebfonts.com/t/9e65328448e32690935f5e0dec7e40be.eot");
        src: url("https://db.onlinewebfonts.com/t/9e65328448e32690935f5e0dec7e40be.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/9e65328448e32690935f5e0dec7e40be.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/9e65328448e32690935f5e0dec7e40be.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/9e65328448e32690935f5e0dec7e40be.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/9e65328448e32690935f5e0dec7e40be.svg#PP Hatton Medium")format("svg");
        font-display: swap;
    }

    @font-face {
      font-family: "SF Pro Display Medium";
      src: url("https://db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.eot");
      src: url("https://db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.eot?#iefix")format("embedded-opentype"),
      url("https://db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.woff2")format("woff2"),
      url("https://db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.woff")format("woff"),
      url("https://db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.ttf")format("truetype"),
      url("https://db.onlinewebfonts.com/t/64a2cfb57c4a5df1013e4f2e5bf3eff3.svg#SF Pro Display Medium")format("svg");
      font-display: swap;
  }
    `,
  }}
/>

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>
  );
}

export default GlobalTags;
