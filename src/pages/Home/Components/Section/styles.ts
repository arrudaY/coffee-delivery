import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const SectionContainer = styled.section`
  display: flex;
  height: 35rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.tertiaryContainer};
`
export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.5rem 0;

  @media (max-width: 599px) {
    margin: 0 16px;
    display: flex;
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
export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  h5 {
    color: ${({ theme }) => theme.colors.onTertiaryContainer};
    ${typography.handwrite}
    font-size: 2rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: fit-content;
    padding: 0 1.5rem;
    border-radius: 999px;
    background-color: transparent;
    outline: 1px solid ${({ theme }) => theme.colors.onSurface};
    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.buttonL}

    &:hover {
      background-color: ${({ theme }) => theme.colors.onSurface};
      color: ${({ theme }) => theme.colors.surface};
    }
  }
`
export const ProductInfo = styled.div`
  display: flex;
  gap: 0.25rem;

  h2,
  strong {
    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.titleL}
  }

  p,
  span {
    color: ${({ theme }) => theme.colors.inverseSurface};
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 2/1;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
  outline: 4px solid ${({ theme }) => theme.colors.surface};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const DoodleContainer = styled.div`
  position: relative;

  > img {
    width: 700px;
    position: absolute;
    top: 40px;
    right: -360px;
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);

    @media (max-width: 599px) {
      width: 300px;
      position: absolute;
      top: -90px;
      right: -140px;
    }
  }
`
