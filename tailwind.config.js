/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["index.html"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      gap: {
        command: "6px",
      },
    },
  },
};
