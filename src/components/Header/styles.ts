import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const HeaderContainer = styled.header`
  display: flex;
  height: 5rem;
  padding: 0 32px;
  z-index: 2;
  //background-color: ${({ theme }) => theme.colors.surface};

  background-color: rgba(255, 248, 242, 0.8);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);

  position: sticky;
  position: -webkit-sticky;
  top: 0;

  @media (max-width: 599px) {
    height: 4rem;
    padding: 0 16px;
    position: unset;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  //border: 1px solid red;

  a {
    line-height: 0;
  }

  img:first-child {
    display: none;
  }

  img:nth-child(2) {
    height: 3rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  }

  button:last-child {
    display: none;
  }

  @media (max-width: 599px) {
    align-items: center;
    justify-content: center;

    nav {
      display: none;
    }
    img:first-child {
      display: unset;
      height: 3rem;
      //border: 1px solid red;
    }

    img:nth-child(2) {
      display: none;
    }

    button:last-child {
      display: unset;
    }
  }
`
export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  //border: 1px solid red;

  width: 3rem;
  height: 3rem;
  border-radius: 999px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.onSurface};

  position: relative;

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.tertiaryContainer};
  }
  &:focus,
  &:active {
    opacity: 0.92;
    color: ${({ theme }) => theme.colors.onTertiaryContainer};
  } */

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 2px solid ${({ theme }) => theme.colors.surface};
    position: absolute;
    top: 2px;
    right: -4px;
    height: 1rem;
    min-width: 1rem;
    border-radius: 999px;
    user-select: none;

    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.onTertiary};

    ${typography.textXS}
    line-height: 0;
  }
`
