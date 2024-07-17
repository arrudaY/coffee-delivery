import { styled } from 'styled-components'

import { typography } from '../../../../styles/typography'

export const HeroSectionContainer = styled.section`
  display: flex;
  height: calc(100vh - 5rem - 3rem);
  min-height: 28rem;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 599px) {
    height: 35rem;
  }
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2rem;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 1rem;

  h1 {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.colors.surface};
    ${typography.titleXL}
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 0.9;
  }

  p {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.colors.surface};
    ${typography.textL}
  }

  button {
    height: 3.5rem;
    padding: 0 1rem 0 1.25rem;
    gap: 3rem;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.primaryFixedDim};
    color: ${({ theme }) => theme.colors.onPrimaryFixed};
    ${typography.buttonL};

    &:hover {
      background-color: ${({ theme }) => theme.colors.inverseSurface};
      color: ${({ theme }) => theme.colors.surface};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.surfaceContainer};
      color: ${({ theme }) => theme.colors.onSurface};
    }
  }
`
