module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        rtx: {
          DEFAULT: '#0f1724',
          slate: '#0b1220',
          accent: '#FFB703',
          accent2: '#00E5FF'
        }
      },
      boxShadow: {
        'elev-md': '0 10px 30px rgba(2,6,23,0.45)',
        'elev-lg': '0 30px 80px rgba(2,6,23,0.55)'
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
