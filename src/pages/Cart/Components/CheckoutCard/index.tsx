import { ItemInfo } from '../ItemInfo'
import { CheckoutButton, CheckoutCardContainer, Summary } from './styles'

export function CheckoutCard() {
  return (
    <CheckoutCardContainer>
      <ItemInfo />
      <ItemInfo />
      <ItemInfo />

      <Summary>
        <div>
          Total de itens
          <span>R$ 29,70</span>
        </div>
        <div>
          Entrega
          <span>R$ 10,00</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$33,20</strong>
        </div>
      </Summary>

      <CheckoutButton type="submit" form="order">
        Confirmar pedido
      </CheckoutButton>
    </CheckoutCardContainer>
  )
}
