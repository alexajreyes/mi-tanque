import { useState, useMemo } from 'react'
import { createTank, readTanks } from 'services/tanks'

export default function useTank() {
  const [tanks, setTanks] = useState(null)
  const [keyword, setKeyword] = useState('')

  const updateKeyword = _keyword => setKeyword(_keyword)

  const saveTank = (tank, onSave = () => {}) => {
    const { capacity, diameter, length } = tank

    createTank({ capacity, diameter, length })
      .then(tankAddedID => {
        onSave(tankAddedID)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const doesThisTankExist = async ({ capacity, diameter, length }) => {
    try {
      const tanks = await readTanks()

      const tankExist = tanks.some(tank => {
        return (
          Number(tank.capacity) === Number(capacity) &&
          Number(tank.diameter) === Number(diameter) &&
          Number(tank.length) === Number(length)
        )
      })

      return tankExist
    } catch (error) {
      console.error(error)
    }
  }

  const getTanks = () => {
    readTanks()
      .then(tanks => {
        //Agregar tanques predefinidos la primera vez que se cargue la aplicacion
        if (Array.isArray(tanks)) {
          if (tanks.length < 1) {
            addPredefinedTanks()
          }
        }

        setTanks(tanks)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const filteredTanks = useMemo(() => {
    if (!tanks) return []
    if (!keyword) return tanks

    return tanks.filter(tank => {
      return (
        String(tank.capacity).toLowerCase().includes(keyword.toLowerCase()) ||
        String(tank.diameter).toLowerCase().includes(keyword.toLowerCase()) ||
        String(tank.length).toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }, [tanks, keyword])

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

  return {
    getTanks,
    saveTank,
    doesThisTankExist,
    filteredTanks,
    keyword,
    updateKeyword,
  }
}
