import { useState, useEffect } from 'react'
import { createTank, readTanks } from 'services/tanks'

export default function useTank() {
    const [tanks, setTanks] = useState(null)

    const saveTank = ({ capacity, diameter, length }) => {
        createTank({ capacity, diameter, length })
            .then(() => {})
            .finally(() => {})
    }

    const getTanks = () => {
        readTanks().then(tanks => {
            setTanks(tanks)
        })
    }

    const addPredefinedTanks = () => {
        saveTank({ capacity: 50, diameter: 25, length: 26 })
        saveTank({ capacity: 75, diameter: 24, length: 41 })
        saveTank({ capacity: 75, diameter: 25, length: 39 })
        saveTank({ capacity: 100, diameter: 23, length: 61 })
        saveTank({ capacity: 100, diameter: 24, length: 54 })
        saveTank({ capacity: 100, diameter: 26, length: 48 })
        saveTank({ capacity: 110, diameter: 25, length: 57 })
        saveTank({ capacity: 110, diameter: 26, length: 54 })
        saveTank({ capacity: 120, diameter: 23, length: 73 })
        saveTank({ capacity: 120, diameter: 24, length: 64 })
        saveTank({ capacity: 125, diameter: 26, length: 59 })
        saveTank({ capacity: 135, diameter: 26, length: 64 })
        saveTank({ capacity: 140, diameter: 23, length: 85 })
        saveTank({ capacity: 150, diameter: 24, length: 80 })
        saveTank({ capacity: 150, diameter: 26, length: 71 })

        //Actualizar la lista de tanques cuando se agregen los tanques predefinidos
        getTanks()
    }

    useEffect(() => {
        getTanks()
    }, [])

    useEffect(() => {
        if (tanks) {
            if (tanks.length < 1) {
                addPredefinedTanks()
            }
        }
    }, [tanks])

    return { tanks, saveTank }
}