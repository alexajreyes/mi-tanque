import React, { useContext } from 'react'
import { useLocation } from 'wouter'
import CardOfTank from 'components/CardOfTank'
import Typography from 'components/Typography'
import { Wrapper, ListOfTanks, LinkContainer } from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'
import useTanks from 'hooks/useTanks'
import { AppContext } from 'store'

export default function TankSearch() {
  const { addTankForDefault } = useContext(AppContext)

  const { tanks } = useTanks()

  const [_, setLocation] = useLocation()

  const selectTank = tank => {
    addTankForDefault({ tank })
    setLocation('/')
  }

  return (
    <Wrapper>
      <TextField placeholder="Buscar tanque" search={true} />

      <Typography
        mt="24px"
        mb="8px"
        value="Seleccione su tanque"
        variant="title2"
      />
      <ListOfTanks>
        {tanks &&
          tanks.map(tank => (
            <CardOfTank
              key={tank.id}
              capacity={tank.capacity}
              diameter={tank.diameter}
              length={tank.length}
              ctaText="Seleccionar"
              onClick={() => selectTank(tank)}
            />
          ))}
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
