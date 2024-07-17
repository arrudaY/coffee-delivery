import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const DialogPortal = styled(Dialog.Portal)``

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 20;
  background: ${({ theme }) => theme.colors.scrim};
  opacity: 0.25;
`
export const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  //min-width: 32rem;
  border-radius: 6px;
  z-index: 20;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.surfaceContainerLow};
  /* width: 90vw;
  max-width: 450px;
  max-height: 85vh; */
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 599px) {
    width: 92%;
    z-index: 20;

    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`
export const DialogHeading = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h3 {
        ${typography.textM}
      }
    }
  }
`
export const ItemImg = styled.div`
  position: relative;

  img {
    width: 5rem;
    height: 5rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.success};
    position: absolute;
    bottom: 0;
    right: -8px;
  }
`
export const DialogTitle = styled(Dialog.Title)`
  ${typography.titleS}
`

export const DialogCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  button {
    height: 2.5rem;
    padding: 0 1.5rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.secondaryContainer};
    color: ${({ theme }) => theme.colors.onSecondaryContainer};
    ${typography.buttonG}
  }
  button:first-child {
    background-color: ${({ theme }) => theme.colors.inversePrimary};
    color: ${({ theme }) => theme.colors.onPrimaryContainer};
  }
`
export const DialogClose = styled(Dialog.Close)``

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.outlineVariant};
`

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > div {
    display: flex;
    justify-content: space-between;
  }
`
