/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#999999'
      },
      boxShadow: {
        'custom': '0px 0px 15px 5px rgba(255, 255, 190, .75)'
      },
    },
//    colors: {
     // div__background: '#61616b',
  //  }
  },
  plugins: [],
}

