import RioGrandeJPG from '../../../../assets/Stores/brent-gorwin-vhQUnmnOLys-unsplash.jpg'
import poaJPG from '../../../../assets/Stores/jeff-sheldon-4vr9a_sdJ78-unsplash.jpg'
import smJPG from '../../../../assets/Stores/yasamine-june-Ywc8t3u25kQ-unsplash.jpg'
import {
  Card,
  CardInfo,
  LocationsHeading,
  LocationsSectionContainer,
} from './styles'

export function LocationsSection() {
  return (
    <LocationsSectionContainer>
      <LocationsHeading>
        <h5>unidades</h5>
        <h2>Relaxe, descanse e recarregue</h2>
        <p>Se estiver na área, dê uma passada para tomar um café com a gente</p>
      </LocationsHeading>

      <div>
        <Card>
          <img src={poaJPG} alt="" />
          <CardInfo>
            <h3>Porto Alegre</h3>
          </CardInfo>
        </Card>
        <Card>
          <img src={RioGrandeJPG} alt="" />
          <CardInfo>
            <h3>Rio Grande</h3>
          </CardInfo>
        </Card>
        <Card>
          <img src={smJPG} alt="" />
          <CardInfo>
            <h3>Santa Maria</h3>
          </CardInfo>
        </Card>
      </div>
    </LocationsSectionContainer>
  )
}
