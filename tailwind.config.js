/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: "true",
      }, 
       colors:{
      'base':'#071422',
      'blue':'#3294f8',
      'base-title':'#e7edf4',
      'base-subtitle':'#c4d4e3',
      'base-text':'#afc2d4',
      'base-span':'#7b96b2',
      'base-label':'#3a536b',
      'base-border':'#1c2f41',
      'base-post':'#112131',
      'base-profile':'#0b1b2b',
      'base-input':'#040f1a'
    }
    },
  
  },
  
  plugins: [],
};