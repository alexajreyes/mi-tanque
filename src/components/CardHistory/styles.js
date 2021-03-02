import styled from 'styled-components'
export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.card};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
export const Text = styled.div`
  white-space: nowrap;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`

export const BarContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: grid;
  white-space: nowrap;
  grid-template-columns: min-content 1fr;
  grid-gap: 4px;
`

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.secondaryText};
`
export const BarProgress = styled.div`
  width: ${({ width }) => width};
  height: 3px;
  background-color: ${({ theme }) => theme.accent};
`
