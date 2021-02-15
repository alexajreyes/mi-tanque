import React from 'react'
import CardOfTank from 'components/CardOfTank'
import { Wrapper } from './styles'

export default function Home() {
    return (
        <Wrapper>
            <CardOfTank capacity={200} diameter={50} length={103} />
        </Wrapper>
    )
}
