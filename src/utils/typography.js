import Typography from "typography"
// import type from "typography-theme-noriega"
import blockquote from "./blockquote.css"

const fonts = [
  "Fira Sans",
  "Roboto",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
]

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  bodyFontFamily: fonts,
  bodyGray: 20,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: fonts,
  headerGray: 20,
  headerWeight: 700,
  overrideStyles: ({ rhythm }, options) => ({
    blockquote,
  }),
})

// type.overrideThemeStyles = ({ rhythm }, options) => ({
//   blockquote,
// })

// const typography = new Typography(type)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
