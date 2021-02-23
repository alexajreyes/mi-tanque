import React, { useState, useEffect, useContext } from 'react'
import Stepper from 'components/Stepper'
import TextGroup from 'components/TextGroup'
import TankAnimation from 'components/TankAnimation'
import { Container, Wrapper, Results, NavBarContainer } from './styles'
import Typography from 'components/Typography'
import NavBar from 'components/NavBar'
import { AppContext } from 'store'
import { useLocation } from 'wouter'

export default function Home() {
  const { defaultTank } = useContext(AppContext)
  const [_, setLocation] = useLocation()

  const [results, seResults] = useState({
    inches: 0,
    gallons: 0,
    liters: 0,
    fuelHeight: 0,
  })

  const onCalcFuelLevel = results => {
    seResults(results)
  }

  useEffect(() => {
    console.log()
    if (Object.keys(defaultTank).length < 1) {
      setLocation('/tanques')
    }
  }, [])

  return (
    <Container>
      <Wrapper>
        <Stepper onCalcFuelLevel={onCalcFuelLevel} />
        <Typography value={'Resultados'} variant="title2" mt="32px" />

        <Results>
          <TextGroup label="Pulgadas" value={results.inches} />
          <TextGroup label="Galones" value={results.gallons} />
          <TextGroup label="Litros" value={results.liters} />
        </Results>
        <TankAnimation fuelHeight={results.fuelHeight} />
      </Wrapper>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </Container>
  )
}
