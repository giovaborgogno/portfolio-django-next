// theme
import ThemeProvider from '../theme';
// components
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />

      </ThemeProvider>
  )
}
