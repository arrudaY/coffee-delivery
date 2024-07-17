import { CreditCard, Gear, Receipt, SignOut } from '@phosphor-icons/react'

import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
} from './styles'

export function AccountMenu() {
  return (
    <DropdownMenuPortal>
      <DropdownMenuContent align="end">
        <h3>Olá, Felipe</h3>
        <DropdownMenuItem>
          <Receipt size={20} />
          Pedidos
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard size={20} />
          Pagamento
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Gear size={20} />
          Minha conta
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut size={20} />
          Sair
        </DropdownMenuItem>
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  )
}
