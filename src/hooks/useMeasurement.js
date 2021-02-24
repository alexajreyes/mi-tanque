import { useState, useEffect } from 'react'
import { createMeasurement, readMeasurements } from 'services/measurements'

export default function useMeasurement() {
    const [measurements, setMeasurements] = useState(null)

    const saveMeasurements = ({ measurements, onSave = () => {} }) => {
        createMeasurement(measurements)
            .then(() => {
                onSave()
            })
            .catch(error => {
                console.error(error)
            })
    }

    const getMeasurements = () => {
        readMeasurements()
            .then(measurements => {
                setMeasurements(measurements)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const getNameOfCity = async ({ latitude, longitude }) => {
        const response = await fetch(
            `http://api.positionstack.com/v1/reverse?access_key=6cebb9c90343dbf90f74f045658a9a70&query=${latitude},${longitude}`
        )

        const { data } = await response.json()

        const location = data[0]

        return `${location.locality}, ${location.country}`
    }

    useEffect(() => {
        getMeasurements()
    }, [])

    return { measurements, saveMeasurements, getNameOfCity }
}
