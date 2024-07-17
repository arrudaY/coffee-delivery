import styled from 'styled-components'

export const CatalogSectionContainer = styled.section``
export const CatalogContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem 0;

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
`

/* 
export const CatalogSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    ${typography.titleL}
    color: ${({ theme }) => theme.colors.onSurface};

    @media (max-width: 599px) {
      ${typography.titleM}
    }
  }
`
export const Catalog = styled.div`
  display: grid;

  @media (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1rem;
  }
  @media (min-width: 600px) and (max-width: 904px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.5rem;
    column-gap: 1rem;
  }
  @media (min-width: 905px) and (max-width: 1439px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;
    column-gap: 1.5rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 2rem;
    column-gap: 1.5rem;
  }
` */
