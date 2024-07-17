import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

import {
  CardHeader,
  PaymentMethod,
  PaymentMethodButton,
  PaymentMethodCardContainer,
} from './styles'

export function PaymentMethodCard() {
  return (
    <PaymentMethodCardContainer>
      <CardHeader>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </CardHeader>

      <PaymentMethod>
        <PaymentMethodButton value="credit">
          <CreditCard size={16} />
          Crédito
        </PaymentMethodButton>
        <PaymentMethodButton value="debit">
          <Bank size={16} />
          Débito
        </PaymentMethodButton>
        <PaymentMethodButton value="money">
          <Money size={16} />
          Dinheiro
        </PaymentMethodButton>
      </PaymentMethod>
    </PaymentMethodCardContainer>
  )
}
