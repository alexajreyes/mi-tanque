import {
  convertLitersToGallons,
  convertInchesToMillimeters,
} from 'utils/converts'

//Funcion de cálculo de Volúmenes parciales en Cilindros Horizontales
export const calcFuelLevel = ({ tankDiameter, tankLength, fuelHeight }) => {
  const radius = convertInchesToMillimeters({ inches: tankDiameter }) / 2000
  const length = convertInchesToMillimeters({ inches: tankLength }) / 1000
  const hutil = convertInchesToMillimeters({ inches: fuelHeight }) / 1000
  const d = radius - hutil
  const m = Math.pow(Math.pow(radius, 2) - Math.pow(d, 2), 0.5)
  const senTeta = m / radius
  const teta1 = 2 * Math.asin(senTeta)
  const senTeta1 = Math.sin(teta1)
  const aSegment = (Math.pow(radius, 2) * (teta1 - senTeta1)) / 2
  const vSegmentMTS = Math.round(aSegment * length * 100) / 100
  const vSegmentLTS = Math.round(aSegment * length * 100000) / 100

  const volumeTotalMTS =
    Math.round(Math.PI * Math.pow(radius, 2) * length * 100) / 100

  const volumeTotalLTS =
    Math.round(Math.PI * Math.pow(radius, 2) * length * 100000) / 100

  const volumeUtilMTS =
    hutil <= radius ? vSegmentMTS : volumeTotalMTS - vSegmentMTS

  const volumeUtilLTS =
    hutil <= radius ? vSegmentLTS : volumeTotalLTS - vSegmentLTS

  //Totales
  /*console.log('Volumen Total m3 :', volumeTotalMTS)
  console.log('Volumen Útil m3 : :', volumeUtilMTS)

  console.log('Volumen Total lts:', volumeTotalLTS)
  console.log('Volumen Útil lts:', volumeUtilLTS)
*/

  return convertLitersToGallons({ liters: volumeUtilLTS })
}
