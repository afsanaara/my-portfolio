/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9ff9c0",
        
"secondary": "#fc7ba6",
        
"accent": "#c2a1e2",
        
"neutral": "#1C2731",
        
"base-100": "#372B46",
        
"info": "#8C9CEE",
        
"success": "#2ED6A1",
        
"warning": "#A56D12",
        
"error": "#ED5E54",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
