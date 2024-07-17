import { css, styled } from 'styled-components'

import { elevation } from '../../../../styles/elevation'
import { typography } from '../../../../styles/typography'

export const ItemInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.outlineVariant};
  color: ${({ theme }) => theme.colors.onSurface};

  strong {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }

  &:first-child {
    padding-top: 0.5rem;
  }
`

export const ItemInfoContent = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  img {
    width: 3rem;
    height: 3rem;
    align-self: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    width: 100%;

    > div:first-child {
      display: flex;
      justify-content: space-between;
    }

    > div {
      display: flex;
      gap: 0.5rem;
      width: 100%;
    }
  }
`
export const RemoveItemButton = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;

  ${typography.buttonM}

  ${({ theme }) => css`
    background-color: ${theme.colors.surfaceContainerHighest};

    svg {
      color: ${theme.colors.tertiary};
    }

    &:hover {
      opacity: 0.92;
      //${elevation[1]};

      svg {
        color: ${theme.colors.onTertiaryContainer};
      }
    }
    &:focus,
    &:active {
      opacity: 0.88;
      ${elevation[0]}
    }
  `}
`
