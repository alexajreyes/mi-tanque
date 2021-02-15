import styled from 'styled-components'

const arrowWidth = '3px'

export const Wrapper = styled.div`
    //border: 1px dashed transparent;
    display: grid;
    grid-template-areas:
        'diameter tank'
        '. lengthTank';
    grid-template-columns: min-content 94px;
    grid-template-rows: 50px min-content;
    gap: 3px;
    height: 50px;
`

export const TankContainer = styled.div`
    grid-area: tank;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        color: ${({ theme }) => theme.primaryText};
    }
`

export const TankCapacity = styled.span`
    position: absolute;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryText};
    &:after {
        content: ' gls';
    }
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
    grid-area: lengthTank;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: ${({ lineWidth }) => lineWidth};
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
        border-top: ${arrowWidth} solid transparent;
        border-bottom: ${arrowWidth} solid transparent;
        border-left: ${arrowWidth} solid ${theme.primaryText};
    `}

        ${({ right, theme }) =>
            !right &&
            `
        left: 0;
        border-top: ${arrowWidth} solid transparent;
        border-bottom: ${arrowWidth} solid transparent;
        border-right: ${arrowWidth} solid ${theme.primaryText};
    `}
    }
`

export const VerticalLine = styled.div`
    width: ${({ lineWidth }) => lineWidth};
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
        top: -${arrowWidth};
        border-top: ${arrowWidth} solid transparent;
        border-bottom: ${arrowWidth} solid transparent;
        border-left: ${arrowWidth} solid ${theme.primaryText};
    `}

        ${({ top, theme }) =>
            !top &&
            `
        transform: rotate(-90deg);
        bottom: -${arrowWidth};
        border-top: ${arrowWidth} solid transparent;
        border-bottom: ${arrowWidth} solid transparent;
        border-right: ${arrowWidth} solid ${theme.primaryText};
    `}
    }
`
export const Caption = styled.span`
    display: block;
    font-size: 10px;
    font-weight: normal;
    color: ${({ theme }) => theme.primaryText};
`
