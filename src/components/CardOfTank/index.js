import React from 'react'
import Typography from 'components/Typography'
import Tank from 'components/Tank'
import { Card } from './styles.js'

export default function CardOfTank({ capacity, diameter, length }) {
  return (
    <Card>
      <Tank capacity={capacity} diameter={diameter} length={length} />

      <div>
        <Typography value={`${capacity} gls`} variant="title3" mb="8px" />
        <Typography value={`${diameter} pulgadas `} variant="body" mb="4px" />
        <Typography value={`${length} pulgadas`} variant="body" mb="8px" />
        <Typography value="Cambiar tanque" variant="link" />
      </div>
    </Card>
  )
}
