import { Card } from '../Card'
import { CatalogContent, CatalogSectionContainer } from './styles'

export function CatalogSection() {
  return (
    <CatalogSectionContainer>
      <h2>Nossos cafés</h2>

      <CatalogContent>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CatalogContent>
    </CatalogSectionContainer>
  )
}
