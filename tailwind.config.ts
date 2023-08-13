// export const theme = {
//   "primary": "hsl(180 100% 10%)",
//   "secondary": "hsl(0 39% 39%)",
//   "accent": "hsl(150 100% 50%)",
//   "neutral": "hsl(0 0% 20%)",
//   "base-100": "hsl(0 0% 100%)",
//   "success": "hsl(150 62% 95%)",
//   "warning": "hsl(43 100% 95%)",
//   "error": "hsl(9 100% 95%)",
//   "info": "hsl(220 100% 97%)",

//   "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
//   "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
//   "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
//   "--animation-btn": "0.25s", // duration of animation when you click on button
//   "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
//   "--btn-text-case": "uppercase", // set default text transform for buttons
//   "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
//   "--border-btn": "1px", // border width of buttons
//   "--tab-border": "1px", // border width of tabs
//   "--tab-radius": "0.5rem", // border radius of tabs
// };

// export default {
//   content: ["./**/*.tsx"],
// };

export default {
  content: ["./**/*.tsx"],
  theme: {
    // https://tailwindcss.com/docs/container#centering-by-default
    container: {
      center: true,
    },
    backgroundPosition: {
      "position-100": "100%",
      "position-0": "0%",
    },
    extend: {
      backgroundImage: {
        "gradient-double-green":
          "linear-gradient(to bottom, #053535, #0a1a13 50%, #0a1a13 0%, #59eead 0%, #64EF74 100%)",
        "gradient-green":
          "linear-gradient(149deg,#053535 .04%,#0a2121 100.04%)",
        "gradient-lemon":
          "linear-gradient(90deg,#00ff80 -.25%,#095f5d 152.54%),conic-gradient(from -90deg at 50% 50%,#fff 0deg,hsla(0,0%,100%,0) 187.5deg,#fff 1turn)",
      },
      boxShadow: {
        "box-shadow-1": "inset 1px 3px 12px #0000004a, inset 1px -3px 12px #066e38ab",
      },
    },
  },
};
