import { Minus, Plus } from '@phosphor-icons/react'

import { ProductQuantityContainer } from './styles'

type Props = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function ProductQuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <ProductQuantityContainer>
      <button title="Diminuir" onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>

      <span>{quantity}</span>

      <button title="Aumentar" onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </ProductQuantityContainer>
  )
}
