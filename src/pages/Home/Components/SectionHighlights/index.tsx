import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import {
  HighlightsGrid,
  HighlightsHeading,
  HighlightsSectionContainer,
} from './styles'

export function HighlightsSection() {
  return (
    <HighlightsSectionContainer>
      <HighlightsHeading>
        <h5>praticidade</h5>
        <h2>Precisando de um gás no seu&nbsp;dia?</h2>
        <p>Escolha seu café e relaxe, o resto é com a&nbsp;gente!</p>
        {/* <button>
          Conheça o nosso cardápio <ArrowRight size={24} />
        </button> */}
      </HighlightsHeading>

      <HighlightsGrid>
        <div>
          <ShoppingCart size={36} weight="fill" />
          <p>Compra simples e&nbsp;segura</p>
        </div>
        <div>
          <Timer size={36} weight="fill" />
          <p>Entrega rápida e&nbsp;rastreada</p>
        </div>
        <div>
          <Package size={36} weight="fill" />
          <p>Embalagem segura para o&nbsp;café</p>
          {/* <p>Embalagem mantém o café&nbsp;intacto</p> */}
        </div>
        <div>
          <Coffee size={36} weight="fill" />
          <p>Café fresquinho, na sua&nbsp;porta</p>
        </div>
      </HighlightsGrid>
    </HighlightsSectionContainer>
  )
}
