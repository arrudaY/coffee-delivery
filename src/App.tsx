import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <Helmet titleTemplate="%s | Coffee Delivery" />
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
