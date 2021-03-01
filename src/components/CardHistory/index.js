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
import { formatDistanceToNow } from 'date-fns'
import { esNI } from 'date-fns/locale'

function CardHistory({ measurement }) {
    const { date, inches, gallons, liters, location } = measurement

    return (
        <Wrapper>
            <Header>
                <Text>
                    <CalendarIcon />
                    <Typography
                        ml="5px"
                        variant="caption"
                        value={formatDistanceToNow(date, {
                            locale: esNI,
                        })}
                    />
                </Text>
                <Text>
                    <MarkerPin />
                    <Typography ml="5px" variant="caption" value={location} />
                </Text>
            </Header>
            <Results>
                <TextGroup label="Pulgadas" value={inches} />
                <TextGroup label="Galones" value={gallons} />
                <TextGroup label="Litros" value={liters} />
            </Results>
            <BarContainer>
                <Typography
                    mr="5px"
                    variant="caption"
                    color="#00A8CC"
                    value={'50%'}
                />
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
