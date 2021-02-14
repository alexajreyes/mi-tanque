import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  position: relative;

  /*&:after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.secondaryText};
  }*/
`
