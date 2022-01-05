// const [node, fichier, argument1, argument2] = process.argv
let node = process.argv[0]
let fichier = process.argv[1]
let argument1 = Number(process.argv[2])
let argument2 = Number(process.argv[3])

if (
  argument1 < argument2 ||
  argument2 == 0 ||
  isNaN(argument1) ||
  isNaN(argument2)
) {
  console.log("error")
} else {
  const resultat = argument1 / argument2
  console.log(`resultat : ${~~resultat}`)
  console.log(`reste : ${argument1 % argument2}`)
}
