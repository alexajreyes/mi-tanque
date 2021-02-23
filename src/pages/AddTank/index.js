import React, { useRef, useContext, useState } from 'react'
import TextField from 'components/TextField'
import Tank from 'components/Tank'
import Button from 'components/Button'
//Import Icons
import { CgArrowsV as DiameterIcon } from 'react-icons/cg'
import { CgArrowsH as LengthIcon } from 'react-icons/cg'
import { Wrapper, Form, TankContainer, ButtonsContainer } from './styles'
import { useLocation } from 'wouter'
import useTanks from 'hooks/useTanks'
import { AppContext } from 'store'
import { validationAlert, successAlert } from 'utils/alerts'

export default function AddTank() {
  const { addTankForDefault } = useContext(AppContext)
  const [_, setLocation] = useLocation()
  const { saveTank, doesThisTankExist } = useTanks()
  const form = useRef(null)
  const [capacity, setCapacity] = useState(0)
  const [diameter, setDiameter] = useState(0)
  const [length, setLength] = useState(0)

  const handleSubmit = async event => {
    event.preventDefault()

    //Validaciones
    if (capacity < 10 || capacity > 250)
      return validationAlert('Ingresa una capacidad valida para tu tanque')
    if (diameter < 10 || diameter > 99)
      return validationAlert('Ingresa un diametro valido para tu tanque')
    if (length < 10 || length > 150)
      return validationAlert('Ingresa una longitud valida para tu tanque')

    const exists = await doesThisTankExist({ capacity, diameter, length })

    if (exists) return validationAlert('Ya existe un tanque con estas medidas')

    const tank = {
      capacity,
      diameter,
      length,
    }

    saveTank(tank, () => {
      //Limpiar campos
      setCapacity(0)
      setDiameter(0)
      setLength(0)
      //Seleccionar tanque agregado como predeterminado
      addTankForDefault({ tank })
      successAlert('Tanque agregado correctamente')
      //Redireccionar a la home
      setLocation('/')
    })
  }

  const cancel = () => {
    //Redireccionar a la home
    setLocation('/tanques')
  }

  return (
    <Wrapper>
      <Form ref={form} onSubmit={handleSubmit} id="formTank">
        <TextField
          type="number"
          label="Capacidad en galones de su tanque"
          placeholder="Ej. 100, 150, 200"
          value={capacity}
          onChange={e => setCapacity(e.target.value)}
        />
        <TextField
          type="number"
          label="Diámetro en pulgadas de su tanque"
          placeholder="Ej. 100, 150, 200"
          Icon={DiameterIcon}
          value={diameter}
          onChange={e => setDiameter(e.target.value)}
        />
        <TextField
          type="number"
          label="Longitud en pulgadas de su tanque"
          placeholder="Ej. 22, 23, 25"
          Icon={LengthIcon}
          value={length}
          onChange={e => setLength(e.target.value)}
        />
      </Form>
      <TankContainer>
        <Tank
          capacity={capacity}
          diameter={diameter}
          length={length}
          lineWidth="1px"
        />
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
