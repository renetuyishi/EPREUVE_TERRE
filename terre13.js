let node = process.argv[0]
let fichier = process.argv[1]
let argument1 = Number(process.argv[2])
let argument2 = Number(process.argv[3])
let argument3 = Number(process.argv[4])

if (argument1 || argument2 || argument3 == "") {
  console.error("put three numbers")
}

if (argument1 > argument2 && argument2 < argument3) {
  console.log(argument3)
}
if (argument1 > argument2 && argument2 > argument3) {
  console.log(argument2)
}
if (argument1 < argument2 && argument2 > argument3) {
  console.log(argument3)
}
if (argument1 < argument2 && argument2 < argument3) {
  console.log(argument2)
}
