import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
      },
      extend: {
        colors: {
          // Blue 
          blue1: "#A3CED6",
          blue2: "#67A4AF",
          blue3: "#327C8A",
          // Yellow
          yellow1: "#FFEB81",
          yellow2: "#E0C640",
          yellow3: "#BEA312",
          // Green 
          green1: "#6EAA87",
          green2: "#3C8259",
          green3: "#166536",
          // Purple 
          purple1: "#E8D0FF",
          purple2: "#C499EE",
          purple3: "#9F66D6",
        },
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  plugins: [],
  
}

export default config
