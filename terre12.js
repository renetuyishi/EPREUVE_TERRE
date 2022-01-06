const [node, fichier, argument1] = process.argv

let heure = argument1.slice(0, 2)

let minutes = argument1.slice(3, 5)
let meridien = argument1.slice(5)
if (heure == 12 && meridien == "pm") {
  console.log(`00:${minutes}`)
} else if (meridien == "pm") {
  console.log(`${parseFloat(heure) + 12}:${minutes}`)
} else if (meridien == "am") {
  console.log(`${heure}:${minutes}`)
}

// console.log(meridien)
// console.log(minutes)
// if (heure == 12) {
//   console.log(`12${minutes} am`)
// } else if (heure > 12 && heure < 24) {
//   console.log(`${heure % 12}${minutes} pm`)
// } else {
//   console.log(`${heure % 12}${minutes} am`)
// }
