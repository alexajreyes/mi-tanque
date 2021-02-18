import React from 'react'
import Stepper from 'components/Stepper'
import TextGroup from 'components/TextGroup'
import TankAnimation from 'components/TankAnimation'
import { Wrapper, Results } from './styles'
import Typography from 'components/Typography'
import NavBar from 'components/NavBar'

export default function Home() {
    return (
        <>
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
            <NavBar />
        </>
    )
}
