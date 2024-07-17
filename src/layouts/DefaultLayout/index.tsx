import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
      <Navbar />
    </LayoutContainer>
  )
}
