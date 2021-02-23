import { db } from 'services/db'

export const createTank = async ({ capacity, diameter, length }) => {
  try {
    await db.tanks.add({ capacity, diameter, length })
  } catch (err) {
    console.error(err)
  }
}

export const readTanks = async () => {
  const allTanks = await db.tanks.toArray()

  return allTanks
}
