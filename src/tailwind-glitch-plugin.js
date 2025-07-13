const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, addUtilities }) {
  addUtilities(
    {
      ".animate-flicker": {
        animation: "flicker 3s infinite alternate",
      },
    },
    ["responsive"]
  );

  addBase({
    ".glitch": {
      position: "relative",
      display: "inline-block",
      fontWeight: "bold",
      color: "#fff",
      overflow: "hidden",
    },
    ".glitch::before": {
      content: "attr(data-text)",
      position: "absolute",
      left: "2px",
      top: 0,
      textShadow: "-2px 0 red",
      background: "transparent",
      clip: "rect(0, 900px, 0, 0)",
      animation: "glitchTop 2s infinite linear alternate-reverse",
    },
    ".glitch::after": {
      content: "attr(data-text)",
      position: "absolute",
      left: "-2px",
      top: 0,
      textShadow: "-2px 0 blue",
      background: "transparent",
      clip: "rect(0, 900px, 0, 0)",
      animation: "glitchBottom 2s infinite linear alternate-reverse",
    },

    ".glitch-rgb::before": {
      textShadow: "2px 0 red",
      animation: "rgbShift 1.5s infinite alternate",
    },
    ".glitch-rgb::after": {
      textShadow: "-2px 0 blue",
      animation: "rgbShift 1.5s infinite alternate-reverse",
    },

    ".glitch-diagonal::before": {
      clipPath: "polygon(0 0, 100% 10%, 100% 40%, 0 30%)",
      animation: "diagonalGlitch 3s infinite linear alternate-reverse",
    },
    ".glitch-diagonal::after": {
      clipPath: "polygon(0 70%, 100% 60%, 100% 100%, 0 90%)",
      animation: "diagonalGlitch 3s infinite linear alternate",
    },
  });

  addBase({
    "@keyframes glitchTop": {
      "0%": { clip: "rect(0, 9999px, 0, 0)" },
      "10%": { clip: "rect(5px, 9999px, 30px, 0)", transform: "translate(-3px, -3px)" },
      "20%": { clip: "rect(10px, 9999px, 50px, 0)", transform: "translate(3px, 3px)" },
      "100%": { clip: "rect(0, 9999px, 0, 0)", transform: "translate(0)" },
    },
    "@keyframes glitchBottom": {
      "0%": { clip: "rect(0, 9999px, 0, 0)" },
      "10%": { clip: "rect(50px, 9999px, 80px, 0)", transform: "translate(3px, 3px)" },
      "20%": { clip: "rect(30px, 9999px, 60px, 0)", transform: "translate(-3px, -3px)" },
      "100%": { clip: "rect(0, 9999px, 0, 0)", transform: "translate(0)" },
    },
    "@keyframes rgbShift": {
      "0%": { transform: "translate(0, 0)" },
      "20%": { transform: "translate(-1px, 1px)" },
      "40%": { transform: "translate(-2px, -1px)" },
      "60%": { transform: "translate(2px, 1px)" },
      "80%": { transform: "translate(1px, -2px)" },
      "100%": { transform: "translate(0, 0)" },
    },
    "@keyframes diagonalGlitch": {
      "0%": { transform: "translate(0, 0)" },
      "25%": { transform: "translate(-2px, 2px)" },
      "50%": { transform: "translate(2px, -2px)" },
      "75%": { transform: "translate(-1px, 1px)" },
      "100%": { transform: "translate(0, 0)" },
    },
    "@keyframes flicker": {
      "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
      "20%, 22%, 24%, 55%": { opacity: "0.4" },
    },
  });
});
