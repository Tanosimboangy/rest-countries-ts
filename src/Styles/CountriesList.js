import styled from 'styled-components'

export const ConuntriesList = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  a {
    @media (min-width: 500px) {
      width: -webkit-fill-available;
    }
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3%;
  }
`
export const LoadingContainer = styled.div`
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Loading = styled.h1`
  color: blue;
  font-size: 45px;
  line-height: 55px;
  font-weight: 700;
  font-style: normal;
`
export const Wrapper = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.CardAndInputs};
  border-radius: 8px;
  &:hover {
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 0.7rem 0.2rem;
  }
  @media (min-width: 760px) {
    margin-bottom: 30px;
  }
`
export const Flag = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const Card = styled.article`
  padding: 40px 30px 40px 30px;
  width: 100%;
  height: 130px;
  background: ${({ theme }) => theme.CardAndInputs};
  border-radius: 0 8px;
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }
`
export const CountryName = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`
export const Population = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  span {
    color: ${({ theme }) => theme.text};
  }
`
export const Region = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  span {
    color: ${({ theme }) => theme.text};
  }
`
export const Capital = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  span {
    color: ${({ theme }) => theme.text};
  }
`
