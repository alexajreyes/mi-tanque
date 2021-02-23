export const convertInchesToMillimeters = ({ inches }) => {
  const ONE_INCH_TO_MILLIMETER = 0.0393701

  return inches / ONE_INCH_TO_MILLIMETER
}

export const convertMillimetersToInches = ({ millimeters }) => {
  const ONE_INCH_TO_MILLIMETER = 0.0393701

  return millimeters * ONE_INCH_TO_MILLIMETER
}

export const convertLitersToGallons = ({ liters }) => {
  const ONE_LITER_TO_GALLON = 0.26417

  return liters * ONE_LITER_TO_GALLON
}

export const convertGallonsToLiters = ({ gallons }) => {
  const ONE_LITER_TO_GALLON = 0.26417

  return gallons / ONE_LITER_TO_GALLON
}
