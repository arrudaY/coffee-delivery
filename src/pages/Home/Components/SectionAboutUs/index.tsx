import AboutUsDoodle from '../../../../assets/Doodles/open-doodles-man-listening-to-music-and-dancing.svg'
import CoffeeImg from '../../../../assets/mikail-duran-wUQerJEG1JA-unsplash.jpg'
import {
  AboutUsContent,
  AboutUsSectionContainer,
  DoodleContainer,
  ImageContainer,
  InfoContainer,
} from './styles'

export function AboutUsSection() {
  return (
    <AboutUsSectionContainer>
      <AboutUsContent>
        <DoodleContainer>
          <img src={AboutUsDoodle} alt="" />
        </DoodleContainer>

        <InfoContainer>
          <div>
            <ImageContainer>
              <img src={CoffeeImg} alt="" />
            </ImageContainer>
          </div>
          <div>
            <h2>Nossa história</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              voluptas minus quas ad dignissimos iusto corrupti nisi tenetur
              error voluptates, eligendi omnis beatae fuga quis id quasi quidem
              voluptatibus modi!
            </p>
          </div>
          <button>Saiba mais</button>
        </InfoContainer>
      </AboutUsContent>
    </AboutUsSectionContainer>
  )
}
