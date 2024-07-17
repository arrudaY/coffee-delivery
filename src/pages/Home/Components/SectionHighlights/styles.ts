import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const HighlightsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
  padding: 2rem 0;
  position: relative;

  border: 1px dashed blue;

  @media (min-width: 905px) and (max-width: 1239px) {
    margin: 0 auto;
    max-width: 840px;
  }
  @media (min-width: 1240px) and (max-width: 1439px) {
    margin: 0 168px;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1040px;
  }
`
export const HighlightsHeading = styled.div`
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

    @media (max-width: 599px) {
      ${typography.titleM}
    }
  }
`

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    aspect-ratio: 3/2;
    gap: 1rem;
    padding: 1.5rem 1.25rem 3rem;
    border-radius: 24px;
    border-radius: 200px 200px 999px 999px;
    background-color: ${({ theme }) => theme.colors.surfaceContainer};
    color: ${({ theme }) => theme.colors.onSurface};
    text-align: center;

    p {
      ${typography.textS}
    }
  }

  @media (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (min-width: 600px) and (max-width: 904px) {
    gap: 16px;
  }

  @media (min-width: 905px) {
    > div {
      padding: 1.75rem 2rem 3rem;
    }
  }
`
