import * as Dialog from '@radix-ui/react-dialog'

import productImg from '../../../../assets/Products/Type=Expresso.png'
import { CartDialog } from '../CartDialog'
import {
  CardContainer,
  CardCTA,
  CardHeader,
  ProductDescription,
  Tag,
} from './styles'

export function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <img src={productImg} alt="" />

        <div>
          <Tag>Tradicional</Tag>
          {/* <Tag>Especial</Tag>
          <Tag>Gelado</Tag>
          <Tag>Alcólico</Tag> */}
        </div>
      </CardHeader>

      <ProductDescription>
        <div>
          <h3>Expresso tradicional</h3>
          <span>
            R$
            <strong>9,90</strong>
          </span>
        </div>

        <p>O tradicional café feito com água xquente e grãos moídos</p>
      </ProductDescription>

      <CardCTA>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button id="addToBag">Comprar</button>
          </Dialog.Trigger>
          <CartDialog />
        </Dialog.Root>
      </CardCTA>
    </CardContainer>
  )
}
