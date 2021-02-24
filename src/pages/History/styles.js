import styled from 'styled-components'

export const Container = styled.section`
  height: calc(100vh - 49px);
  display: flex;
  flex-direction: column;
`

export const NavBarContainer = styled.div`
  width: 100%;
  margin-top: auto;
`

export const Wrapper = styled.section`
  max-width: 100%;
  padding: 16px;
`

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 65px;
  grid-gap: 16px;
`

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  justify-content: center;
  align-items: center;
`
