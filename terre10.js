let node = process.argv[0]
let fichier = process.argv[1]
let argument1 = Number(process.argv[2])

let estNbPremier = false

if (argument1 == 2) {
  console.log(`${argument1} est un nombre premier`)
} else {
  for (let i = 2; i < argument1; i++) {
    if (argument1 % i == 0) {
      estNbPremier = false
      break
    } else {
      estNbPremier = true
    }
  }

  if (estNbPremier) {
    console.log(`${argument1} est un nombre premier`)
  } else {
    console.log(`${argument1} n'est pas un nombre premier`)
  }
}
