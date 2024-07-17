import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const FooterContainer = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.surfaceDim};
  color: ${({ theme }) => theme.colors.onSurfaceVariant};

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5rem 0 4rem;
    gap: 2rem;

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
  }
`
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 1rem;
  }

  > img {
    width: 100%;
    margin-right: -1.5rem;
    margin-bottom: -1rem;
  }

  div img {
    height: 5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 599px) {
    display: grid;
    grid-template-columns: 1fr;

    > img {
      width: 100%;
      margin: unset;
    }
  }
`
export const LinksBlock = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    ${typography.textS}
  }

  li:first-child {
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: 0.25rem;
    ${typography.titleXS}
    font-weight: 600;
  }

  li {
    padding: 0.25rem;

    a {
      &:hover {
        color: ${({ theme }) => theme.colors.onSurface};
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.onSurface};
    }
  }
`
export const Separator = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.onSurfaceVariant};
`
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${typography.textXS}

  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  > div:first-child {
    display: flex;
    gap: 1.5rem;

    img {
      height: 1.25rem;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.onSurfaceVariant};

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.onSurface};
      }
    }

    div {
      display: flex;
    }

    @media (max-width: 599px) {
      flex-direction: column-reverse;
      gap: 0.5rem;

      svg {
        display: none;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
    }

    @media (min-width: 600px) and (max-width: 904px) {
      flex-direction: column-reverse;

      div {
        display: flex;
      }

      > svg {
        display: none;
      }
    }
  }

  > div:last-child {
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 0;
      color: ${({ theme }) => theme.colors.onSurfaceVariant};

      svg:nth-child(2) {
        display: none;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.onSurface};

        svg:first-child {
          display: none;
        }
        svg:nth-child(2) {
          display: unset;
        }
      }
    }
  }
`
