import { useEffect, useState } from 'react'
import {
  createMeasurement,
  readMeasurementsByDateRanges,
} from 'services/measurements'
import { readTanks } from 'services/tanks'
import { addDays, addHours } from 'date-fns'

const initialTotalState = {
  start: 0,
  end: 0,
  consumed: 0,
}

export default function useMeasurement() {
  const [listOfTanks, setListOfTanks] = useState(null)
  const [totalGallons, setTotalGallons] = useState(initialTotalState)

  const [date, setDate] = useState({
    start: addDays(new Date(), -7),
    end: addDays(new Date(), 0),
  })

  //Muestra la fecha seleccionada en la interfaz
  const onSelectDate = _date => {
    if (!_date) return

    setDate({
      start: _date.startDate,
      end: addHours(_date.endDate, 23.59),
    })
  }

  const saveMeasurements = ({ measurements, onSave = () => {} }) => {
    createMeasurement(measurements)
      .then(() => {
        onSave()
      })
      .catch(error => {
        console.error(error)
      })
  }

  const getIdsOfTanks = ({ data }) => {
    if (!data) return []
    const ids = data.map(measurement => measurement.tankId)

    //Eliminar tanques duplicados
    const uniques = ids.filter((value, index) => {
      return ids.indexOf(value) === index
    })

    //retornar la lista de tanques
    return uniques
  }

  const getTanksDetails = async ({ idsTanks }) => {
    if (idsTanks) {
      if (idsTanks.length < 1) return
    }
    if (!idsTanks) return

    try {
      const allTanks = await readTanks()

      if (!Array.isArray(allTanks)) return

      //Recorrer la los ids de los tanques para obtener el detalle de cada tanque
      const tanksWithDetails = idsTanks.map(id => {
        //getTanksByIds({ id }).then(tankWithDetail=>tankWithDetail)
        const _tank = allTanks.filter(tank => {
          return Number(tank.id) === Number(id)
        })

        return _tank[0]
      })

      return tanksWithDetails
    } catch (error) {
      console.error(error)
    }
  }

  const getNameOfCity = async ({ latitude, longitude }) => {
    try {
      const response = await fetch(
        `https://app.geocodeapi.io/api/v1/reverse?point.lat=${latitude}&point.lon=${longitude}&apikey=6384fa00-7b09-11eb-b491-2511be64546d`
      )

      const data = await response.json()
      const location = data?.features[0].properties

      return `${location.locality}, ${location.country}`
    } catch (error) {
      console.error(error)
      return 'Sin ubicación'
    }
  }

  const getMeasurementsByTank = ({ id, data }) => {
    if (Array.isArray(data)) {
      const _measurements = data.filter(
        measurement => Number(measurement.tankId) === Number(id)
      )

      return _measurements
    }
  }

  const getMeasurements = async () => {
    try {
      const measurements = await readMeasurementsByDateRanges({
        startDate: date.start,
        endDate: date.end,
      })

      //Ordenar resultados
      measurements.sort((a, b) => {
        if (a.date < b.date) {
          return -1
        }
        if (a.date > b.date) {
          return 1
        }
        // a debe ser igual b
        return 0
      })

      //Obtener los ids de cada tanque
      const idsTanks = getIdsOfTanks({ data: measurements })

      //Obtener detalle de tanques mediante ids
      const tanksWithDetails = await getTanksDetails({ idsTanks })

      //Asociar mediciones a cada tanque
      const tanksWithMeasurements = tanksWithDetails.map(tank => ({
        tank: tank,
        measurements: getMeasurementsByTank({
          id: tank.id,
          data: measurements,
        }),
      }))

      setListOfTanks(tanksWithMeasurements)
      setTotalGallons({
        start: measurements[0].gallons,
        end: measurements[measurements.length - 1].gallons,
        consumed:
          Number(measurements[0].gallons) -
          Number(measurements[measurements.length - 1].gallons),
      })
    } catch (err) {
      setListOfTanks(null)
      setTotalGallons(initialTotalState)
      console.error(err)
    }
  }

  useEffect(() => {
    getMeasurements()
  }, [date])

  return {
    saveMeasurements,
    getNameOfCity,
    listOfTanks,
    totalGallons,
    onSelectDate,
    date,
  }
}
