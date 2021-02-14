import React, { useContext } from 'react'
import { ReactComponent as TankIcon } from 'assets/tank.svg'
import { AppContext } from 'store'
import {
  TankContainer,
  TankCapacity,
  TankDiameter,
  TankLength,
  HorizontalLine,
  VerticalLine,
} from './styles'

//Import icons

export default function Tank({ capacity, diameter, length }) {
  const { isDarkModeActive } = useContext(AppContext)

  return (
    <TankContainer>
      <TankCapacity>{capacity}</TankCapacity>

      <TankDiameter>
        <VerticalLine top={true}></VerticalLine>
        <span>{diameter}</span>
        <VerticalLine top={false}></VerticalLine>
      </TankDiameter>

      <TankIcon fill={isDarkModeActive ? '#FFFFFF' : '#142850'} />

      <TankLength>
        <HorizontalLine right={false}></HorizontalLine>
        <span>{length}</span>
        <HorizontalLine right={true}></HorizontalLine>
      </TankLength>

      <article></article>
    </TankContainer>
  )
}
