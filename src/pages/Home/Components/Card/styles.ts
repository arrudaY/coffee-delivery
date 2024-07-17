import styled from 'styled-components'

import { elevation } from '../../../../styles/elevation'
import { typography } from '../../../../styles/typography'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  #addToBag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 32px;
    padding: 0 1rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.tertiaryContainer};
    color: ${({ theme }) => theme.colors.onTertiaryContainer};
    ${typography.buttonM}
    display: none;

    &:hover {
      ${elevation[1]}
    }

    &:active {
      background-color: #${({ theme }) => theme.colors.inverseOnSurface};
      color: ${({ theme }) => theme.colors.surface};
      opacity: 0.92;
      ${elevation[0]}
    }
  }

  &:hover {
    #addToBag {
      display: unset;
      background-color: ${({ theme }) => theme.colors.inverseSurface};
      color: ${({ theme }) => theme.colors.surface};
    }
  }
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.surfaceContainerLow};

  position: relative;

  img {
    margin-top: -3rem;
    width: 8rem;
    aspect-ratio: 1/1;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0 0.25rem;
    width: 100%;
    height: 4.5rem;
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  span {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;

    color: ${({ theme }) => theme.colors.onSurface};
    ${typography.titleS}
  }
`
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;
  text-align: start;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      ${typography.textXS}
    }

    strong {
      color: ${({ theme }) => theme.colors.onSurface};
      ${typography.titleS}
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    ${typography.titleXS}
  }

  p {
    ${typography.textXS}
  }
`
export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  color: ${({ theme }) => theme.colors.primary};
  ${typography.tag}
`
export const CardCTA = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
`
