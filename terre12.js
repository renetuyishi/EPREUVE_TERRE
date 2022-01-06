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
