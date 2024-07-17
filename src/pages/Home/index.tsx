import { Section } from './Components/Section'
import { AboutUsSection } from './Components/SectionAboutUs'
import { HeroSection } from './Components/SectionHero'
import { HighlightsSection } from './Components/SectionHighlights'
import { LocationsSection } from './Components/SectionLocations'
import { RecomendationsSection } from './Components/SectionRecomendations'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <HighlightsSection />
      <Section />
      <RecomendationsSection />
      <AboutUsSection />
      <LocationsSection />
    </HomeContainer>
  )
}
