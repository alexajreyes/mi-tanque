import Dexie from 'dexie'

/*
	|----------------------------|
	| Declare  database      |
	|----------------------------|
	*/

export const db = new Dexie('MyTank')

// Declare tables, IDs and indexes
db.version(1).stores({
  tanks: '++id, capacity, diameter, length',
  measurements: '++id,date, inches, gallons, liters, location, tank',
})
