export class Dot {
  name: string
  code: string
  latitude: string
  longitude: string
  radius: string
  arrivalFrom: string
  arrivalTo: string
  loadingTime: string
  actualArrivalTime: string
  actualDepartureTime: string
  constructor(
    name: string,
    code: string,
    latitude: string,
    longitude: string,
    radius: string,
    arrivalFrom: string,
    arrivalTo: string,
    loadingTime: string,
    actualArrivalTime: string,
    actualDepartureTime: string,
  ) {
    this.name = name
    this.code = code
    this.latitude = latitude
    this.longitude = longitude
    this.radius = radius
    this.arrivalFrom = arrivalFrom
    this.arrivalTo = arrivalTo
    this.loadingTime = loadingTime
    this.actualArrivalTime = actualArrivalTime
    this.actualDepartureTime = actualDepartureTime
  }

  getCurrentPoint() {}
}
