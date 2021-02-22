import styled from 'styled-components'
import { DateRange as Date } from 'react-date-range'

export const Calendar = styled.div`
  position: relative;
`

export const DateRange = styled(Date)``
export const Buttons = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  display: grid;

  z-index: 999;
  align-items: center;
  height: 54px;
  background-color: ${({ theme }) => theme.accent};
`
