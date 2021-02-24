import { db } from 'services/db'

export const createTank = async ({ capacity, diameter, length }) => {
  try {
    const newTank = await db.tanks.add({ capacity, diameter, length })

    return newTank
  } catch (err) {
    console.error(err)
  }
}

export const readTanks = async () => {
  const allTanks = await db.tanks.toArray()

  return allTanks
}
