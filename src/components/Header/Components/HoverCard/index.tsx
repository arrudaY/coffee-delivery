import { ShoppingBagOpen } from '@phosphor-icons/react'
import * as HoverCard from '@radix-ui/react-hover-card'

import { HoverCardArrow, HoverCardContent } from './styles'

export function CartHoverCard() {
  return (
    <HoverCard.Portal>
      <HoverCardContent sideOffset={6} align="end">
        <ShoppingBagOpen size={32} weight="duotone" />
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Explore nosso cardápio de cafés</p>
        </div>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCard.Portal>
  )
}
