import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4.5rem;

  border-top: 0.5px solid ${({ theme }) => theme.colors.outlineVariant};

  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};

  position: fixed;
  bottom: 0;
  left: 0;

  nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  nav div {
    display: flex;
    flex-direction: column;
    width: 56px;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }

  a {
    line-height: 16px;
  }

  @media (min-width: 600px) {
    display: none;
  }
`
