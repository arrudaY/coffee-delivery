import { Trash } from '@phosphor-icons/react'

import Img from '../../../../assets/Products/Type=Expresso.png'
import { ItemInfoContainer, ItemInfoContent, RemoveItemButton } from './styles'

export function ItemInfo() {
  return (
    <ItemInfoContainer>
      <ItemInfoContent>
        <img src={Img} alt="" />
        <div>
          <div>
            Expresso Tradicional
            <strong>R$ 9,90</strong>
          </div>
          <div>
            {/* <ProductQuantityInput /> */}
            <RemoveItemButton title="Remover">
              <Trash size={16} />
            </RemoveItemButton>
          </div>
        </div>
      </ItemInfoContent>
    </ItemInfoContainer>
  )
}
