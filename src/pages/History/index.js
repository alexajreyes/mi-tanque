import React, { useState } from 'react'
import NavBar from 'components/NavBar'
import TextField from 'components/TextField'
import DateModal from 'components/DateModal'
import { DateRange } from './styles'

//Import icons
import { IoMdCalendar as CalendarIcon } from 'react-icons/io'
import {
  Wrapper,
  FilterContainer,
  Container,
  NavBarContainer,
  IconContainer,
} from './styles'

function History() {
  const [calendarIsVisible, setCalendarIsVisible] = useState(false)

  const showCalendar = () => setCalendarIsVisible(true)

  const hideCalendar = () => setCalendarIsVisible(false)

  return (
    <Container>
      <Wrapper>
        <FilterContainer>
          <TextField placeholder="Buscar tanque" search={true} />
          <IconContainer onClick={showCalendar}>
            <CalendarIcon size={22} />
          </IconContainer>
        </FilterContainer>
      </Wrapper>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>

      {calendarIsVisible && (
        <DateModal
          onSelect={dates => console.log(dates)}
          closeModal={hideCalendar}
        />
      )}
    </Container>
  )
}

export default React.memo(History)
