import React from 'react'
import Typography from 'components/Typography'
import Tank from 'components/Tank'
import { Card } from './styles.js'

export default function CardOfTank({
    capacity,
    diameter,
    length,
    ctaText = 'Seleccionar',
}) {
    return (
        <Card>
            <Tank capacity={capacity} diameter={diameter} length={length} />

            <div>
                <Typography
                    value={`Tanque de ${capacity} gls`}
                    variant="title3"
                    mb="8px"
                />
                <Typography
                    value={`Diametro: ${diameter} pulgadas `}
                    variant="body"
                    mb="4px"
                />
                <Typography
                    value={`Longitud: ${length} pulgadas`}
                    variant="body"
                    mb="8px"
                />
                <Typography value={ctaText} variant="link2" />
            </div>
        </Card>
    )
}
