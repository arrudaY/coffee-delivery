import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const LocationsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
  padding: 2rem 0;

  > div:nth-child(2) {
    display: flex;
    gap: 24px;
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
export const LocationsHeading = styled.div`
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
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: left;
  width: 18rem;
  aspect-ratio: 2/3;

  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.outlineVariant}; //TODO elevation

  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const CardInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0) 100%
  );

  width: 100%;
  height: 100%;
  padding: 2.5rem 1.5rem;

  position: absolute;
  top: 0;
  right: 0;

  h3 {
    color: ${({ theme }) => theme.colors.surface};
    ${typography.titleXL}
    line-height: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
`
