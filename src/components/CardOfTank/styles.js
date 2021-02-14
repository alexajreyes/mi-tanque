import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`
