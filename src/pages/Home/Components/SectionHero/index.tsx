import { ArrowRight } from '@phosphor-icons/react'

import HeroBackground from '../../../../assets/hero.mp4'
import { Heading, HeroContent, HeroSectionContainer } from './styles'

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroContent>
        <Heading>
          <h1>
            Seu café,
            <br /> a qualquer hora
          </h1>
          <p>
            A <span lang="en-us">Coffee Delivery</span> te acompanha em todos os
            momentos
          </p>
          <button>
            Peça agora <ArrowRight size={24} />
          </button>
        </Heading>
      </HeroContent>

      <video autoPlay loop muted>
        <source src={HeroBackground} type="video/mp4" />
      </video>
    </HeroSectionContainer>
  )
}
