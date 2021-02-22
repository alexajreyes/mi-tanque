import React from 'react'
import CardOfTank from 'components/CardOfTank'
import Typography from 'components/Typography'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { StepContainer, BadgeContainer, Badge, Line, Step } from './styles'
import { useLocation } from 'wouter'

export default function Stepper() {
  const [_, setLocation] = useLocation()

  const selectTank = () => {
    setLocation('/tanques')
  }

  return (
    <StepContainer>
      <Step>
        <BadgeContainer>
          <Badge completed={true}>1</Badge>
          <Line></Line>
        </BadgeContainer>

        <div>
          <Typography mb="4px" value="Elija un  tanque" variant="title2" />
          <CardOfTank
            capacity={100}
            diameter={24}
            length={58}
            ctaText="Cambiar tanque"
            onClick={selectTank}
          />
        </div>
      </Step>
      <Step>
        <BadgeContainer>
          <Badge completed={false}>2</Badge>
          <Line></Line>
        </BadgeContainer>
        <TextField placeholder="Ingrese la cantidad de pulgadas" />
      </Step>
      <Step>
        <BadgeContainer>
          <Badge completed={false}>3</Badge>
        </BadgeContainer>
        <Button variant="filled" size="large">
          Calcular
        </Button>
      </Step>
    </StepContainer>
  )
}
