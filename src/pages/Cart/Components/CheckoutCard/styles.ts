import styled from 'styled-components'

import { elevation } from '../../../../styles/elevation'
import { typography } from '../../../../styles/typography'

export const CheckoutCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.surfaceContainerHigh};

  @media (max-width: 599px) {
    padding: 2rem 1rem;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
  ${typography.textS}

  div {
    display: flex;
    justify-content: space-between;

    span {
      ${typography.textM}
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.onSurface};
      ${typography.textL}
    }
  }
`
export const CheckoutButton = styled.button`
  padding: 0.75rem 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primaryFixedDim};
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  ${typography.buttonG}

  &:hover {
    opacity: 0.92;
    ${elevation[1]}
  }
  &:focus,
  &:active {
    opacity: 0.88;
    ${elevation[0]}
  }
`
