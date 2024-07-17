import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import SuccessImg from '../../assets/Doodles/open-doodles-man-holding-a-mag-with-coffee.svg'
import {
  Heading,
  PurchaseContentInner,
  PurchaseContentOuter,
  PurchaseDetails,
  PurchaseInfo,
  SuccessContainer,
  SuccessContent,
} from './styles'

export function Success() {
  const theme = useTheme()

  return (
    <SuccessContainer>
      <SuccessContent>
        <Heading>
          <h2>Uhul! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Heading>

        <PurchaseContentOuter>
          <PurchaseContentInner>
            <PurchaseInfo>
              <MapPin
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ background: theme.colors.tertiary }}
              />
              <PurchaseDetails>
                <div>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </div>
                <strong>Farrapos - Porto Alegre, RS</strong>
              </PurchaseDetails>
            </PurchaseInfo>
            <PurchaseInfo>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ background: theme.colors.primaryFixedDim }}
              />
              <PurchaseDetails>
                Previsão de entrega
                <strong>20min - 30min</strong>
              </PurchaseDetails>
            </PurchaseInfo>
            <PurchaseInfo>
              <CurrencyDollar
                size={32}
                weight="bold"
                color={theme.colors.background}
                style={{ background: theme.colors.primary }}
              />
              <PurchaseDetails>
                Pagamento na entrega
                <strong>Cartão de crédito</strong>
              </PurchaseDetails>
            </PurchaseInfo>
          </PurchaseContentInner>
        </PurchaseContentOuter>
      </SuccessContent>

      <aside>
        <img src={SuccessImg} alt="" />
      </aside>
    </SuccessContainer>
  )
}
