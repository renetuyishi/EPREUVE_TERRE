let node = process.argv[0]
let fichier = process.argv[1]
let argument1 = Number(process.argv[2])

let memoire = 0
let i = 0

if (argument1 < 0 || isNaN(argument1)) {
  console.log("Il faut un chiffre > 0 ")
} else {
  for (i; memoire < argument1; ) {
    i++
    memoire = i * i
  }
  console.log(i)
}
