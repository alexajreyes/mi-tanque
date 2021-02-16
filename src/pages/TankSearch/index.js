import React from 'react'
import CardOfTank from 'components/CardOfTank'
import Typography from 'components/Typography'
import { Wrapper, ListOfTanks, LinkContainer } from './styles'
import { Link } from 'wouter'
import TextField from 'components/TextField'

export default function TankSearch() {
    return (
        <Wrapper>
            <TextField />

            <Typography value="Seleccione su tanque" variant="title2" />
            <ListOfTanks>
                <CardOfTank
                    capacity={150}
                    diameter={22}
                    length={54}
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
                <CardOfTank
                    capacity={200}
                    diameter={50}
                    length={103}
                    ctaText="Seleccionar"
                />
            </ListOfTanks>
            <LinkContainer>
                <Typography value="¿Tu tanque no aparece?" variant="title3" />
                <Link to="/">
                    <Typography value="Agregar tanque" variant="link" />
                </Link>
            </LinkContainer>
        </Wrapper>
    )
}
