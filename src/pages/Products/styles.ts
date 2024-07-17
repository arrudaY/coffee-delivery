import styled from 'styled-components'

export const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
  padding: 0.5rem 32px 6rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.surface};

  @media (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0.5rem 16px 6rem;
  }
`
