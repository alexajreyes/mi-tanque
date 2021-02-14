import styled from 'styled-components'

export const TankContainer = styled.div`
  border: 1px dashed transparent;
  display: grid;
  grid-template-areas:
    'diameter tank'
    '. length';
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr 20px;
  justify-items: stretch;
  align-items: stretch;
  gap: 5px;
  position: relative;

  & > svg {
    border: 1px dashed transparent;
    margin: 0;
    grid-area: tank;
    width: 100%;
    height: 100%;
  }
`

export const TankCapacity = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  display: block;
  top: calc(50% - 20px);
  right: calc(50% - 20px);
`
export const TankDiameter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-area: diameter;
  width: 100%;
  align-items: center;
`

export const TankLength = styled.div`
  border: 1px solid black;
  position: relative;
  grid-area: length;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.primaryText};
  position: relative;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    position: absolute;

    ${({ right, theme }) =>
      right &&
      `
        right: 0;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-left: 3px solid ${theme.primaryText};
    `}

    ${({ right, theme }) =>
      !right &&
      `
        left: 0;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-right: 3px solid ${theme.primaryText};
    `}
  }
`

export const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.primaryText};
  position: relative;
  display: flex;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;

    ${({ top, theme }) =>
      top &&
      `
        transform: rotate(-90deg);
        top: -3px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid ${theme.primaryText};
    `}

    ${({ top, theme }) =>
      !top &&
      `
        transform: rotate(-90deg);
        bottom: -3px;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-right: 3px solid ${theme.primaryText};
    `}
  }
`
