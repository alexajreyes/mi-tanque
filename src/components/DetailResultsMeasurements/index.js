import TextGroup from 'components/TextGroup'
import Typography from 'components/Typography'
import React from 'react'
import { Wrapper, Results } from './styles'

function DetailResultsMeasurements() {
  return (
    <Wrapper>
      <Typography value="Galones de combustible" variant="title3" />
      <Results>
        <TextGroup label="Al iniciar" value="100gls" caption="2 feb. 2021" />
        <TextGroup label="Al finalizar" value="50gls" caption="26 feb. 2021" />
        <TextGroup
          label="Consumidos"
          value="50gls"
          caption="Del 02/02/2021 al 26/02/2021"
        />
      </Results>
    </Wrapper>
  )
}

export default React.memo(DetailResultsMeasurements)
