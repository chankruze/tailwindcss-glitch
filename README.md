# ⚡ tailwindcss-glitch

Cyberpunk-inspired glitch effect plugin for Tailwind CSS. Supports RGB offset, diagonal slice, flicker, and stacked glitch effects.

## 💥 Install

```bash
npm install tailwindcss-glitch
```

## 🚀 Usage

```js
// tailwind.config.js
const glitch = require("tailwindcss-glitch");
module.exports = {
  plugins: [glitch],
};
```

```jsx
<h1
  className="glitch glitch-rgb glitch-diagonal glitch-flicker text-6xl font-extrabold text-yellow-400"
  data-text="ERROR"
>
  ERROR
</h1>
```

## 🎮 Variants

- `glitch`: base
- `glitch-rgb`: RGB offset
- `glitch-diagonal`: diagonal slice
- `glitch-flicker`: flicker animation

## 💡 Tip

Customize colors and shadow values in the plugin if you'd like wilder neon or cyberpunk vibes!

## License

MIT
