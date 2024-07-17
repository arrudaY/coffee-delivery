import HighlightsDoodle from '../../../../assets/Doodles/open-doodles-woman-is-running.svg'
import CoffeeImg from '../../../../assets/tavis-beck-mAAcR1LR0mo-unsplash.jpg'
import {
  DoodleContainer,
  ImageContainer,
  ProductInfo,
  ProductInfoContainer,
  SectionContainer,
  SectionContent,
} from './styles'

export function Section() {
  return (
    <SectionContainer>
      <SectionContent>
        <ProductInfoContainer>
          <div>
            <h5>novo!</h5>
            <ImageContainer>
              <img src={CoffeeImg} alt="" />
            </ImageContainer>
          </div>

          <ProductInfo>
            <div>
              <h2>Cubano</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto illum reprehenderitodio.
              </p>
            </div>
            <span>
              R$
              <strong>9,90</strong>
            </span>
          </ProductInfo>
          <button>Comprar</button>
        </ProductInfoContainer>
        <DoodleContainer>
          <img src={HighlightsDoodle} alt="" />
        </DoodleContainer>
      </SectionContent>
    </SectionContainer>
  )
}
