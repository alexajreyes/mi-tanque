import React, { useState, Suspense } from 'react'
import NavBar from 'components/NavBar'
import TextField from 'components/TextField'
import { format, addDays } from 'date-fns'

//Import icons
import { IoMdCalendar as CalendarIcon } from 'react-icons/io'
import { Wrapper, Container, NavBarContainer } from './styles'

function History() {
    const [date, setDate] = useState({
        start: format(addDays(new Date(), -7), 'dd MMM. yyyy'),
        end: format(new Date(), 'dd MMM. yyyy'),
    })

    const DateModal = React.lazy(() => import('components/DateModal'))

    const [calendarIsVisible, setCalendarIsVisible] = useState(false)

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
