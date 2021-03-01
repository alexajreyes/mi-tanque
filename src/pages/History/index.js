import React, { useState, Suspense, useEffect } from 'react'
import NavBar from 'components/NavBar'
import TextField from 'components/TextField'
import { format, addDays } from 'date-fns'
import DetailResultsMeasurements from 'components/DetailResultsMeasurements'
import TankHistoryCollapse from 'components/TankHistoryCollapse'
//Import icons
import { IoMdCalendar as CalendarIcon } from 'react-icons/io'
import { Wrapper, Container, NavBarContainer } from './styles'
import Typography from 'components/Typography'

import useMeasurement from 'hooks/useMeasurement'

function History() {
  const DateModal = React.lazy(() => import('components/DateModal'))
  const [calendarIsVisible, setCalendarIsVisible] = useState(false)

  const [date, setDate] = useState({
    start: format(addDays(new Date(), -7), 'dd MMM. yyyy'),
    end: format(new Date(), 'dd MMM. yyyy'),
  })

  //Obtenemos la lista de mediciones
  const { listOfTanks, totalGallons } = useMeasurement()

  const showCalendar = () => setCalendarIsVisible(true)
  const hideCalendar = () => setCalendarIsVisible(false)

  //Muestra la fecha seleccionada en la interfaz
  const onSelectDate = _date => {
    if (!_date) return

    setDate({
      start: format(_date.startDate, 'dd MMM. yyyy'),
      end: format(_date.endDate, 'dd MMM. yyyy'),
    })
  }

  return (
    <Container>
      <Wrapper>
        <TextField
          readOnly={true}
          onClick={showCalendar}
          label="Seleccione un periodo"
          value={`${date.start} al ${date.end} `}
          Icon={CalendarIcon}
          placeholder="Buscar tanque"
          search={true}
        />

        <DetailResultsMeasurements totalGallons={totalGallons} date={date} />

        <Typography
          mt="16px"
          variant="title2"
          value="Historial de mediciones"
        />

        {listOfTanks &&
          listOfTanks.length > 0 &&
          listOfTanks.map(tank => {
            return (
              <TankHistoryCollapse
                key={tank.tank.id}
                tank={tank.tank}
                measurements={tank.measurements}
              />
            )
          })}
      </Wrapper>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>

      {calendarIsVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <DateModal
            onSelect={dates => onSelectDate(dates)}
            closeModal={hideCalendar}
          />
        </Suspense>
      )}
    </Container>
  )
}

export default React.memo(History)
