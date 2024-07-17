import styled from 'styled-components'

export const ProductQuantityContainer = styled.div`
  display: flex;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.surfaceContainerHighest};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    color: ${({ theme }) => theme.colors.onSurface};
  }

  button {
    padding: unset;
    width: 36px;
    height: 40px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.surfaceContainerHighest};
    color: ${({ theme }) => theme.colors.tertiary};

    &:hover {
      background-color: unset;
      color: ${({ theme }) => theme.colors.onTertiaryContainer};
    }
  }
`
