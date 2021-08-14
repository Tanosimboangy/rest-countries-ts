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
  @media (min-width: 1000px) {
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (min-width: 760px) {
    margin-bottom: 30px;
  }
  &:hover {
    border-radius: 4px;
    transform: translateY(-6px);
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 0.7rem 0.2rem;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
  }
`
export const Flag = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const Card = styled.div`
  padding: 0 20px;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.CardAndInputs};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 20px;
  span {
    font-weight: 600;
    color: black;
  }
`
export const CountryName = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  padding-bottom: 20px;
  padding-top: 20px;
  // color: hsl(209, 23%, 22%);
  color: ${({ theme }) => theme.text};
`
export const Population = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 10px;
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
  color: ${({ theme }) => theme.text};
  span {
    color: ${({ theme }) => theme.text};
  }
`
