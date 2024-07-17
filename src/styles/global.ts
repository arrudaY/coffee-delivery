import { createGlobalStyle } from 'styled-components'

import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${typography.textM};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.surfaceContainerLow};
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  a {
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
  }
`
