import * as HoverCard from '@radix-ui/react-hover-card'
import styled from 'styled-components'

import { typography } from '../../../../styles/typography'

export const HoverCardContent = styled(HoverCard.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  gap: 0.5rem;
  z-index: 20;
  padding: 2rem 1.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.surface};
  //TODO shadow
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.24rem;

    h3 {
      ${typography.titleXS}
    }
    p {
      ${typography.textS}
    }
  }

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-side='left'] {
    animation-name: slideRightAndFade;
  }
  @keyframes slideUpAndFade {
    0% {
      opacity: 0;
      transform: translateY(2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    0% {
      opacity: 0;
      transform: translateX(-2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    0% {
      opacity: 0;
      transform: translateY(-2px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    0% {
      opacity: 0;
      transform: translateX(2px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const HoverCardArrow = styled(HoverCard.Arrow)`
  fill: ${({ theme }) => theme.colors.surface};
`
