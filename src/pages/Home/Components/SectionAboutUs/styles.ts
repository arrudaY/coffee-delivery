import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const AboutUsSectionContainer = styled.section`
  display: flex;
  height: 35rem;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  margin: 300px 0;
`

export const AboutUsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.5rem 0;
  width: 100%;

  @media (max-width: 599px) {
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  > div {
    width: 100%;
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
    width: 600px;
    position: absolute;
    top: 20px;
    left: -350px;

    @media (max-width: 599px) {
      width: 250px;
      top: -200px;
      left: 40px;
      display: none;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  h2 {
    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.titleL}
  }
  p {
    color: ${({ theme }) => theme.colors.inverseSurface};
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
