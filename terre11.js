const [node, fichier, argument1] = process.argv

const heure24 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
]

const heure12 = [
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12pm",
]
let heure = argument1.slice(0, 2)

let minutes = argument1.slice(2)

if (heure == 12) {
  console.log(`12${minutes} am`)
} else if (heure > 12 && heure < 24) {
  console.log(`${heure % 12}${minutes} pm`)
} else {
  console.log(`${heure % 12}${minutes} am`)
}
