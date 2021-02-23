import NavBar from 'components/NavBar'
import React, { useState, useEffect, useContext } from 'react'
import Stepper from 'components/Stepper'
import TankAnimation from 'components/TankAnimation'
import TextGroup from 'components/TextGroup'
import Typography from 'components/Typography'
import { AppContext } from 'store'
import { Container, Wrapper, Results, NavBarContainer } from './styles'
import { useLocation } from 'wouter'
import useMeasurement from 'hooks/useMeasurement'
import { format } from 'date-fns/format'
import useGeolocation from 'react-hook-geolocation'
import { eoLocale } from 'date-fns/locale/eo'

export default function Home() {
    //Estado que obtiene la latitud y longitud del usuario
    const geolocation = useGeolocation()

    //Estado que obtiene el tanque predeterminado
    const { defaultTank } = useContext(AppContext)
    //Funcion para redireccionar a otras paginas
    const [_, setLocation] = useLocation()
    //Funcion que guarda la medicion en la bbdd
    const { saveMeasurements, getNameOfCity } = useMeasurement()
    //Estado que guarda los resultados de la medicion
    const [results, seResults] = useState({
        inches: 0,
        gallons: 0,
        liters: 0,
        fuelHeight: 0,
    })

    /*Funcion que muestra lo resultados en la interfaz y guarda los resultados en la bbdd*/
    const onCalcFuelLevel = async _results => {
        seResults(_results)

        //const date = format(new Date(), 'yyyy-MM-dd')

        const tankId = defaultTank?.id
        let location = 'Sin ubicación'

        if (!geolocation.error) {
            location = await getNameOfCity({
                latitude: geolocation.latitude,
                longitude: geolocation.longitude,
            })
        }

        //console.log(location)

        const measurements = { ..._results, date: 'Hoy', location, tankId }
        console.log(measurements)

        /*saveMeasurements({
            measurements,
            onSave: () => {
                //Callback que se ejecuta cuando se guarda una medicion en la bbdd
            },
        })*/
    }

    useEffect(() => {
        //Redireccionar  a la pantalla de tanques en el caso de que no haya un tanque preseleccionado por defecto
        if (Object.keys(defaultTank).length < 1) return setLocation('/tanques')
    }, [])

    return (
        <Container>
            <Wrapper>
                <Stepper onCalcFuelLevel={onCalcFuelLevel} />
                <Typography value={'Resultados'} variant="title2" mt="32px" />

                <Results>
                    <TextGroup label="Pulgadas" value={results.inches} />
                    <TextGroup label="Galones" value={results.gallons} />
                    <TextGroup label="Litros" value={results.liters} />
                </Results>
                <TankAnimation fuelHeight={results.fuelHeight} />
            </Wrapper>
            <NavBarContainer>
                <NavBar />
            </NavBarContainer>
        </Container>
    )
}
