import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.surface};

  @media (max-width: 599px) {
    margin-bottom: 4rem;
  }
`
