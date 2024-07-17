import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0.5rem 32px 6rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.surface};

  @media (max-width: 599px) {
    padding: 0.5rem 16px 6rem;
  }
`
