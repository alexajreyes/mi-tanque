import styled, { css } from 'styled-components'

const Primitive = css`
    font-style: normal;
    font-style: normal;
    font-family: 'Roboto', sans-serif;

    font-weight: 400;
    margin-top: ${({ mt }) => (mt ? mt : 0)};
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-left: ${({ ml }) => (ml ? ml : 0)};
    margin-right: ${({ mr }) => (mr ? mr : 0)};
`

export const Title = styled.h1`
    ${Primitive}
    font-weight: 500;
    font-size: 28px;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const Title2 = styled.h2`
    ${Primitive}
    font-weight: 500;
    font-size: 20px;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`

export const Title3 = styled.h3`
    ${Primitive}
    font-weight: bold;
    font-size: 16px;
    color: ${({ color, theme }) => (color ? color : theme.primaryText)};
`
export const Link = styled.h4`
    ${Primitive}
    font-weight: bold;
    font-size: 14px;
    color: ${({ color, theme }) => (color ? color : theme.accent)};
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const Body = styled.p`
    ${Primitive}
    font-weight: 400;
    font-size: 14px;
    color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
`

export const Caption = styled.span`
    ${Primitive}
    font-weight: 400;
    font-size: 12px;
    color: ${({ color, theme }) => (color ? color : theme.secondaryText)};
`
