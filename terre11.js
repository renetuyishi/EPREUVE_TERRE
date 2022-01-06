const [node, fichier, argument1] = process.argv

let heure = argument1.slice(0, 2)

let minutes = argument1.slice(2)

if (heure == 12) {
  console.log(`12${minutes} am`)
} else if (heure > 12 && heure < 24) {
  console.log(`${heure % 12}${minutes} pm`)
} else {
  console.log(`${heure % 12}${minutes} am`)
}
