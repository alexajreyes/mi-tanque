import styled from 'styled-components'
import Wave1 from 'react-wavify'

const tankSize = '250px'

export const Wave = styled(Wave1)`
    height: ${tankSize};
    width: ${tankSize};
    position: relative;
    svg {
        position: absolute;
        bottom: 0;
        height: ${({ fuellevel }) => fuellevel};
    }
`

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.card};
    margin: auto;
    overflow: hidden;
    width: ${tankSize};
    height: ${tankSize};
    border-radius: 50%;
`
