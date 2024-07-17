import * as RadioGroup from '@radix-ui/react-radio-group'
import styled, { css } from 'styled-components'

import { elevation } from '../../../../styles/elevation'
import { typography } from '../../../../styles/typography'

export const PaymentMethodCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.surfaceContainerLow};
  margin-top: 0.25rem;

  @media (max-width: 599px) {
    padding: 2rem 1rem;
  }
`
export const CardHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  ${typography.textS}

  svg {
    align-self: center;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      color: ${({ theme }) => theme.colors.onSurface};
      ${typography.textM}
    }
  }
`

export const PaymentMethod = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.75rem;

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0.5rem;
  }
`

export const PaymentMethodButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 6px;
  text-transform: uppercase;

  ${typography.buttonM}
  line-height: 0;

  ${({ theme }) => css`
    background-color: ${theme.colors.surfaceContainerHighest};
    color: ${theme.colors.onSurface};
    border: 1px solid transparent;

    svg {
      color: ${theme.colors.tertiary};
    }

    &[data-state='checked'] {
      background-color: ${theme.colors.tertiaryContainer};
      color: ${theme.colors.onTertiaryContainer};
      border: 1px solid ${theme.colors.outlineVariant};

      svg {
        color: ${theme.colors.onTertiaryContainer};
      }
    }

    &[data-state='unchecked']:hover {
      opacity: 0.92;
      ${elevation[1]}
    }
    &[data-state='unchecked']:focus,
    &[data-state='unchecked']:active {
      opacity: 0.88;
      ${elevation[0]}
    }
  `}
`
