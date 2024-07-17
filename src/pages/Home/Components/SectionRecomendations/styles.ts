import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const RecomendationsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
  padding: 2rem 0;
  position: relative;

  > button {
    margin-top: -3rem;
    height: 3.5rem;
    padding: 0 1rem 0 1.25rem;
    gap: 2rem;
    border-radius: 30px;
    //background-color: ${({ theme }) => theme.colors.surfaceContainerHigh};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.inverseSurface};
    border: 1px solid ${({ theme }) => theme.colors.inverseSurface};
    ${typography.buttonL};

    &:hover {
      //background-color: ${({ theme }) => theme.colors.inverseSurface};
      //color: ${({ theme }) => theme.colors.surface};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.surfaceContainer};
      //color: ${({ theme }) => theme.colors.onSurface};
    }
  }

  @media (max-width: 599px) {
    margin: 0 16px;
  }
  @media (min-width: 600px) and (max-width: 904px) {
    margin: 0 32px;
  }
  @media (min-width: 905px) and (max-width: 1239px) {
    margin: 0 auto;
    max-width: 840px;
  }
  @media (min-width: 1240px) and (max-width: 1439px) {
    margin: 0 200px;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1040px;
  }
`
export const RecomendationsHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h5 {
    color: ${({ theme }) => theme.colors.tertiary};
    ${typography.handwrite}
    margin-bottom: 0.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.titleL}
  }
`

export const RecomendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
