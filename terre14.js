// const [node, fichier, argument1, argument2, argument3, argument4, argument5] =
//   process.argv

let node = process.argv[0]
let fichier = process.argv[1]
let argument1 = Number(process.argv[2])
let argument2 = Number(process.argv[3])
let argument3 = Number(process.argv[4])
let argument4 = Number(process.argv[5])
let argument5 = Number(process.argv[6])

let allArguments = [argument1, argument2, argument3, argument4, argument5]

if (isNaN(argument1, argument2, argument3, argument4, argument5)) {
  console.error("Choisir des chiffres ")
} else {
  let estTrie = false
  for (let i = 0; i < 5; i++) {
    if (allArguments[i] > allArguments[i + 1]) {
      estTrie = false
      console.log("N'est pas trié")
      break
    } else {
      estTrie = true
    }
  }
  if (estTrie) {
    console.log("Est trié")
  }
}
