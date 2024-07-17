import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const NotFoundContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    border: 1px solid red;
  }

  #CoffeeStain {
    max-width: 15rem;
    margin-left: 2rem;

    @media (max-width: 599px) {
      margin: 4rem 0 -1.75rem 2rem;
    }
    /* @media (orientation: portrait) and (min-width: 600px) and (max-width: 839px) {
      margin: 5rem 0 rem 2rem;
    } */
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -3.5rem;
  gap: 0.25rem;

  @media (max-width: 599px) {
    margin-top: 0;
  }

  h1 {
    ${typography.titleXL}
    font-size: 3rem;

    @media (max-width: 599px) {
      ${typography.titleL}
    }
  }

  p {
    text-align: center;
    ${typography.textM}
  }

  button {
    display: flex;
    height: 2.5rem;
    padding: 0.625rem 1.5rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    ${typography.buttonM}
  }
`
