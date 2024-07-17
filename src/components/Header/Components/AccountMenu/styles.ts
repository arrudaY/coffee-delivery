import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const DropdownMenuPortal = styled(DropdownMenu.Portal)``
export const DropdownMenuContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 6px;
  padding: 2rem 1.5rem 1rem;
  z-index: 20;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  h3 {
    padding: 0.5rem;
    ${typography.titleXS}
  }

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-side='left'] {
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
export const DropdownMenuItem = styled(DropdownMenu.Item)`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 0.5rem;
  gap: 0.5rem;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.onSurface};
  position: relative;
  user-select: none;
  outline: none;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.surfaceContainerHigh};
  }
`
export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.outlineVariant};
  margin: 4px;
`
export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.colors.surface};
`
