import React from 'react'
import CardOfTank from 'components/CardOfTank'
import { Wrapper } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <CardOfTank capacity={100} diameter={24} length={54} />
    </Wrapper>
  )
}
