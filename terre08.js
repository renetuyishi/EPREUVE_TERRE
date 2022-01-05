let node = process.argv[0]
let fichier = process.argv[1]
let argument1 = Number(process.argv[2])
let argument2 = Number(process.argv[3])

if (argument2 < 0) {
  console.log("l'exposant doit être positif")
} else if (isNaN(argument1) || isNaN(argument2)) {
  console.log("ce n'est pas un chiffre")
} else {
  let memoire = argument1
  for (let i = 0; i < argument2 - 1; i++) {
    memoire = memoire * argument1
  }
  console.log(memoire)
}
