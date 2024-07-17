import { Dot, Smiley, SmileyWink } from '@phosphor-icons/react'

import LogotipoSVG from '../../assets/Brand/logotipo.svg'
import doodleFooter from '../../assets/Doodles/open-doodles-man-sitting-and-chilling.svg'
import instagramSVG from '../../assets/Icons/instagram.svg'
import tiktokSVG from '../../assets/Icons/tiktok.svg'
import twitterSVG from '../../assets/Icons/twitter.svg'
import {
  FooterBottom,
  FooterContainer,
  FooterContent,
  LinksBlock,
  Separator,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterContent>
          <div>
            <img src={LogotipoSVG} alt="" />
            <LinksBlock>
              <ul>
                <li>Sobre</li>
                <li>
                  <a href="http://">Nossa história</a>
                </li>
                <li>
                  <a href="http://">Nossas lojas</a>
                </li>
                <li>
                  <a href="http://">Trabalhe conosco</a>
                </li>
              </ul>
              <ul>
                <li>Contato</li>
                <li>
                  <a href="mailto:hello@coffeedelivery.com">
                    hello@coffeedelivery.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5555999999999">(55) 99999-9999</a>
                </li>
              </ul>
            </LinksBlock>
          </div>
          <img src={doodleFooter} alt="" />
        </FooterContent>

        <Separator />

        <FooterBottom>
          <div>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <img src={instagramSVG} alt="" />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok"
            >
              <img src={tiktokSVG} alt="" />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              title="X.com"
            >
              <img src={twitterSVG} alt="" />
            </a>
          </div>

          <div>
            <span>© 2024 Coffee Delivery</span>
            <Dot size={24} weight="bold" />
            <div>
              <a href="http://">Termos e condições de uso</a>
              <Dot size={24} weight="bold" />
              <a href="http://">Política de privacidade</a>
            </div>
          </div>

          <div>
            <a
              href="https://github.com/arrudaY"
              target="_blank"
              rel="noopener noreferrer"
            >
              DEV
              <Smiley size={24} />
              <SmileyWink size={24} />
              Felipe Arruda
            </a>
          </div>
        </FooterBottom>
      </div>
    </FooterContainer>
  )
}
