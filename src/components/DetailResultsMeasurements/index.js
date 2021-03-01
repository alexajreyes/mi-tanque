import TextGroup from 'components/TextGroup'
import Typography from 'components/Typography'
import React from 'react'
import { Wrapper, Results } from './styles'
import { format, addDays } from 'date-fns'

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
                    caption={format(startDate, 'dd MMM. yyyy')}
                />
                <TextGroup
                    label="Al finalizar"
                    value={`${end} gls`}
                    caption={format(endDate, 'dd MMM. yyyy')}
                />
                <TextGroup
                    label="Consumidos"
                    value={`${consumed.toFixed(2)} gls`}
                />
            </Results>
        </Wrapper>
    )
}

export default React.memo(DetailResultsMeasurements)
