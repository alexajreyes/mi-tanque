import TextGroup from 'components/TextGroup'
import Typography from 'components/Typography'
import React from 'react'
import { Wrapper, Results } from './styles'

function DetailResultsMeasurements({ totalGallons, date }) {
  const { start, end, consumed } = totalGallons
  const { start: startDate, end: endDate } = date

  return (
    <Wrapper>
      <Typography value="Galones de combustible" variant="title3" />
      <Results>
        <TextGroup
          label="Al iniciar"
          value={`${start} gls`}
          caption={startDate}
        />
        <TextGroup
          label="Al finalizar"
          value={`${end} gls`}
          caption={endDate}
        />
        <TextGroup
          label="Consumidos"
          value={`${consumed.toFixed(2)} gls`}
          caption={`Del ${startDate} al ${endDate}`}
        />
      </Results>
    </Wrapper>
  )
}

export default React.memo(DetailResultsMeasurements)
