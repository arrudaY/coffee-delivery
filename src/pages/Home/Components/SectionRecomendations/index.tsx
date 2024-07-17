import { ArrowRight } from '@phosphor-icons/react'

import { Card } from '../Card'
import {
  RecomendationsGrid,
  RecomendationsHeading,
  RecomendationsSectionContainer,
} from './styles'

export function RecomendationsSection() {
  return (
    <RecomendationsSectionContainer>
      <RecomendationsHeading>
        <h5>surpreenda-se</h5>
        <h2>Cafés varios sabores</h2>
        <p>Conheça os nossos cafés mais vendidos</p>
        {/* <button>
          Conheça o nosso cardápio <ArrowRight size={24} />
        </button> */}
      </RecomendationsHeading>

      <RecomendationsGrid>
        <Card />
        <Card />
        <Card />
      </RecomendationsGrid>

      <button>
        Conheça o nosso cardápio
        <ArrowRight size={24} />
      </button>
    </RecomendationsSectionContainer>
  )
}
