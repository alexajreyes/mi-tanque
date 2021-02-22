import React from 'react'
import Stepper from 'components/Stepper'
import TextGroup from 'components/TextGroup'
import TankAnimation from 'components/TankAnimation'
import { Container, Wrapper, Results, NavBarContainer } from './styles'
import Typography from 'components/Typography'
import NavBar from 'components/NavBar'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Stepper />
        <Typography value={'Resultados'} variant="title2" mt="32px" />

        <Results>
          <TextGroup label="Pulgadas" value={'8'} />
          <TextGroup label="Galones" value={'100'} />
          <TextGroup label="Litros" value={'250'} />
        </Results>
        <TankAnimation />
      </Wrapper>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </Container>
  )
}
