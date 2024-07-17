import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import CoffeeStain from '../../assets/cup-coffee-stain-1.png'
import { Header } from '../../components/Header'
import { Heading, NotFoundContainer } from './styles'

export function NotFound() {
  return (
    <>
      <Helmet title="Página indisponível" />
      <NotFoundContainer>
        <Header />

        <div>
          <img src={CoffeeStain} alt="" id="CoffeeStain" />

          <Heading>
            <h1>Página não encontrada</h1>
            <p>
              O link pode não estar funcionando ou a página pode ter sido
              removida.
            </p>
            <Link to={'/'}>
              <button>Voltar para o início</button>
            </Link>
          </Heading>
        </div>
      </NotFoundContainer>
    </>
  )
}
