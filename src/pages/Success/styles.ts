import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.tertiaryContainer};

  /* @media (max-width: 599px) {
    margin: 48px 16px;
  }
  @media (min-width: 600px) and (max-width: 904px) {
    margin: 70px 32px;
  }
  @media (orientation: portrait) and (min-width: 905px) and (max-width: 1239px) {
    margin: 70px 32px;
  }
  @media (orientation: landscape) and (min-width: 905px) and (max-width: 1239px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 80px auto;
    max-width: 840px;
  }
  @media (min-width: 1240px) and (max-width: 1439px) {
    margin: 100px 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    margin: 100px auto;
    max-width: 1040px;
  }
 */
  aside {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      @media (max-width: 599px) {
        width: 85%;
      }
    }
  }
`
export const SuccessContent = styled.div`
border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    color: ${({ theme }) => theme.colors.tertiary};
    ${typography.titleL}

    @media (max-width: 599px) {
      text-align: center;
      ${typography.titleM}
    }
    @media (min-width: 600px) and (max-width: 904px) {
      text-align: center;
    }
  }

  p {
    ${typography.textM}

    @media (max-width: 904px) {
      text-align: center;
    }
  }
`
export const PurchaseContentOuter = styled.div`
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.primaryContainer}, ${theme.colors.tertiary})`};
`
export const PurchaseContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 5px 35px;
  background-color: ${({ theme }) => theme.colors.surface};

  @media (max-width: 599px) {
    gap: 1rem;
    padding: 1rem;
  }

  svg {
    padding: 0.5rem;
    border-radius: 50%;
  }
`
export const PurchaseInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
`
