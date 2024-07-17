import { Bag, Coffee, Storefront, User } from '@phosphor-icons/react'

import { NavLink } from './Components/NavLink'
import { NavbarContainer } from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <nav>
        <div>
          <NavLink to="/" title="Início">
            <div>
              <Storefront size={20} />
            </div>
            Início
          </NavLink>
        </div>
        <div>
          <NavLink to="/produtos" title="Comprar">
            <div>
              <Coffee size={20} />
            </div>
            Cardápio
          </NavLink>
        </div>
        <div>
          <NavLink to="/sacola" title="Sacola">
            <div>
              <Bag size={20} />
              <span>1</span>
            </div>
            Sacola
          </NavLink>
        </div>
        <div>
          <NavLink to="/conta" title="Conta">
            <div>
              <User size={20} />
            </div>
            Conta
          </NavLink>
        </div>
      </nav>
    </NavbarContainer>
  )
}
