import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export type NavLinkProps = LinkProps

export const StyledNavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};

  div {
    width: 4rem;
    height: 1.5rem;
    border-radius: 20px;
    position: relative;
  }

  div span {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 2px solid ${({ theme }) => theme.colors.surface};
    position: absolute;
    top: -3px;
    right: 6px;
    height: 1rem;
    min-width: 1rem;
    border-radius: 999px;
    user-select: none;

    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.onTertiary};

    ${typography.textXS}
    line-height: 0;
  }

  &[data-current='true'] {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.onSurface};

    div {
      background-color: ${({ theme }) => theme.colors.tertiaryContainer};
      animation: scale-in-hor-center 200ms ease-in both;

      @keyframes scale-in-hor-center {
        0% {
          transform: scaleX(0.9);
          opacity: 1;
        }
        100% {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
`
