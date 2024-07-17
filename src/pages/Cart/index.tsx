import { Helmet } from 'react-helmet-async'

import { AddressCard } from './Components/AddressCard'
import { CheckoutCard } from './Components/CheckoutCard'
import { CartContainer, InfoContainer } from './styles'

export function Cart() {
  return (
    <>
      <Helmet title="Sacola" />

      <CartContainer>
        <InfoContainer>
          <h2>Complete seu pedido</h2>

          <AddressCard />
        </InfoContainer>
        <InfoContainer>
          <h2>Cafés selecionados</h2>
          <CheckoutCard />
        </InfoContainer>
      </CartContainer>
    </>
  )
}
