import React from 'react'
import TextField from 'components/TextField'
import Tank from 'components/Tank'
import Button from 'components/Button'
//Import Icons
import { CgArrowsV as DiameterIcon } from 'react-icons/cg'
import { CgArrowsH as LengthIcon } from 'react-icons/cg'
import { Wrapper, Form, TankContainer, ButtonsContainer } from './styles'
import { useLocation } from 'wouter'

export default function AddTank() {
  const [_, setLocation] = useLocation()

  const handleSubmit = event => {
    event.preventDefault()

    //Redireccionar a la home
    setLocation('/')
  }

  const cancel = () => {
    //Redireccionar a la home
    setLocation('/tanques')
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} id="formTank">
        <TextField
          label="Capacidad en galones de su tanque"
          placeholder="Ej. 100, 150, 200"
        />
        <TextField
          label="Diámetro en pulgadas de su tanque"
          placeholder="Ej. 100, 150, 200"
          Icon={DiameterIcon}
        />
        <TextField
          label="Longitud en pulgadas de su tanque"
          placeholder="Ej. 22, 23, 25"
          Icon={LengthIcon}
        />
      </Form>
      <TankContainer>
        <Tank capacity={125} diameter={25} length={51} lineWidth="1px" />
      </TankContainer>

      <ButtonsContainer>
        <Button variant="filled" size="large" type="submit" form="formTank">
          Guardar
        </Button>
        <Button variant="outline" size="large" onClick={cancel}>
          Cancelar
        </Button>
      </ButtonsContainer>
    </Wrapper>
  )
}
