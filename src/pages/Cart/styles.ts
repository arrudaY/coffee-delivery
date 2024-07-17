import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const CartContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;

  @media (max-width: 599px) {
    margin: 32px 16px 48px;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  @media (min-width: 600px) and (max-width: 904px) {
    margin: 32px 32px 38px;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  @media (min-width: 905px) and (max-width: 1239px) {
    margin: 16px auto 32px;
    max-width: 840px;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
  @media (min-width: 1240px) and (max-width: 1439px) {
    margin: 32px 200px;
  }
  @media (min-width: 1440px) {
    margin: 32px auto;
    max-width: 1040px;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    margin-bottom: 0.25rem;
    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.titleXS}
  }
`
