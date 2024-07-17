import * as RadioGroup from '@radix-ui/react-radio-group'
import styled, { css } from 'styled-components'

import { elevation } from '../../../../styles/elevation'
import { typography } from '../../../../styles/typography'

export const AddressCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.surfaceContainerHigh};
  background-color: ${({ theme }) => theme.colors.surfaceContainerLow};

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
    color: ${({ theme }) => theme.colors.primary};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      ${typography.textM}
      color: ${({ theme }) => theme.colors.onSurface};
    }
  }
`
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'postalCode postalCodeLink .'
    'addressLine1 addressLine1 addressLine1'
    'houseNumber addressLine2 addressLine2'
    'suburb city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
  align-items: center;

  @media (max-width: 599px) {
    grid-template-areas:
      'postalCode postalCodeLink'
      'addressLine1 addressLine1'
      'houseNumber houseNumber'
      'addressLine2 addressLine2'
      'suburb suburb'
      'city city'
      'state state';
    grid-gap: 1rem 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 905px) and (max-width: 1239px) {
    grid-template-columns: 6.75rem 1fr 3rem;
  }

  input {
    height: 2.5rem;
    padding-left: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.outline};
    outline: 1px solid transparent;
    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.textS}

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.onSurfaceVariant};
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.125rem;
    ${typography.textS}
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const PaymentMethodCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.surfaceContainerHigh};
  margin-top: 0.25rem;

  @media (max-width: 599px) {
    padding: 2rem 1rem;
  }
`
/* export const CardHeader = styled.div`
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
` */

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
