import React from 'react'
import TextGroup from 'components/TextGroup'
import Typography from 'components/Typography'
import {
  Wrapper,
  Header,
  Text,
  Results,
  BarContainer,
  Bar,
  BarProgress,
} from './styles'
import { IoMdCalendar as CalendarIcon } from 'react-icons/io'
import { IoMdPin as MarkerPin } from 'react-icons/io'

function CardHistory({ date = '2 ene. 2021', address = 'Managua, Nicaragua' }) {
  return (
    <Wrapper>
      <Header>
        <Text>
          <CalendarIcon />
          <Typography ml="5px" variant="caption" value={date} />
        </Text>
        <Text>
          <MarkerPin />
          <Typography ml="5px" variant="caption" value={address} />
        </Text>
      </Header>
      <Results>
        <TextGroup label="Pulgadas" value="8" />
        <TextGroup label="Galones" value="100" />
        <TextGroup label="Litros" value="250" />
      </Results>
      <BarContainer>
        <Typography mr="5px" variant="caption" color="#00A8CC" value={'50%'} />
        <div>
          <Bar>
            <BarProgress></BarProgress>
          </Bar>
          <Typography
            mt="5px"
            variant="caption"
            value={'50 galones / 100 galones'}
          />
        </div>
      </BarContainer>
    </Wrapper>
  )
}

export default React.memo(CardHistory)
