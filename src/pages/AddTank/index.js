import React from 'react'
import TextField from 'components/TextField'
import Tank from 'components/Tank'
import Button from 'components/Button'
//Import Icons
import { CgArrowsV as DiameterIcon } from 'react-icons/cg'
import { CgArrowsH as LengthIcon } from 'react-icons/cg'
import { Wrapper, Form, TankContainer, ButtonsContainer } from './styles'

export default function AddTank() {
    return (
        <Wrapper>
            <Form>
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
                <Tank
                    capacity={125}
                    diameter={25}
                    length={51}
                    lineWidth="1px"
                />
            </TankContainer>

            <ButtonsContainer>
                <Button variant="filled" size="large">
                    Guardar
                </Button>
                <Button variant="outline" size="large">
                    Cancelar
                </Button>
            </ButtonsContainer>
        </Wrapper>
    )
}
