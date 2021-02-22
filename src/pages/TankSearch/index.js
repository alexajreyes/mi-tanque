import React from 'react'
import { useLocation } from 'wouter'
import CardOfTank from 'components/CardOfTank'
import Typography from 'components/Typography'
import { Wrapper, ListOfTanks, LinkContainer } from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'

export default function TankSearch() {
  const [_, setLocation] = useLocation()

  const selectTank = () => {
    setLocation('/')
  }

  return (
    <Wrapper>
      <TextField placeholder="Buscar tanque" search={true} />

      <Typography value="Seleccione su tanque" variant="title2" />
      <ListOfTanks>
        <CardOfTank
          capacity={150}
          diameter={22}
          length={54}
          ctaText="Seleccionar"
          onClick={selectTank}
        />
        <CardOfTank
          capacity={200}
          diameter={50}
          length={103}
          ctaText="Seleccionar"
        />
        <CardOfTank
          capacity={200}
          diameter={50}
          length={103}
          ctaText="Seleccionar"
        />
        <CardOfTank
          capacity={200}
          diameter={50}
          length={103}
          ctaText="Seleccionar"
        />
      </ListOfTanks>
      <LinkContainer>
        <Typography value="¿Tu tanque no aparece?" variant="title3" />
        <Button
          variant="link"
          size="medium"
          onClick={() => setLocation('/tanques/crear')}
        >
          Agregar tanque
        </Button>
      </LinkContainer>
    </Wrapper>
  )
}
