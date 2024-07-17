import { Bag, List } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

import ImagotipoSVG from '../../assets/Brand/imagotipo.svg'
import IsotipoSVG from '../../assets/Brand/isotipo.svg'
import { HeaderContainer, HeaderContent, IconButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" end title="Início">
          <img src={IsotipoSVG} alt="" />
          <img src={ImagotipoSVG} alt="" />
        </NavLink>

        <nav>
          <NavLink to="/produtos">Cardápio</NavLink>
          <NavLink to="/">Conta</NavLink>
          <NavLink to="/sacola">
            <IconButton>
              <Bag size={24} />
            </IconButton>
          </NavLink>
          <IconButton>
            <List size={24} />
          </IconButton>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
