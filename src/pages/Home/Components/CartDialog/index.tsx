import { CheckCircle } from '@phosphor-icons/react'

import Img from '../../../../assets/Products/Type=Expresso.png'
import {
  CartSummary,
  DialogClose,
  DialogContent,
  DialogCTA,
  DialogHeading,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  ItemImg,
  Separator,
} from './styles'

export function CartDialog() {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogHeading>
          <ItemImg>
            <img src={Img} alt="" />
            <CheckCircle size={36} weight="fill" />
          </ItemImg>
          <div>
            <DialogTitle>Adicionado ao carrinho</DialogTitle>
            <div>
              <h3>Expresso tradicional</h3>
              <span>01 unidade</span>
            </div>
          </div>
        </DialogHeading>

        <Separator />

        <CartSummary>
          <h4>Seu carrinho</h4>
          <span>2 items</span>
          <div>
            <span>Total</span>
            <strong>R$ 9,90</strong>
          </div>
        </CartSummary>

        <DialogCTA>
          <button>Ir para o carrinho</button>

          <DialogClose asChild>
            <button>Continuar comprando</button>
          </DialogClose>
        </DialogCTA>
      </DialogContent>
    </DialogPortal>
  )
}
