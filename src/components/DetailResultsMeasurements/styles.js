import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`

export const Results = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;

  div:last-of-type,
  div:nth-child(2) {
    text-align: center;
  }
`
