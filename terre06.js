const [node, fichier, argument] = process.argv
let memoire = ""
for (let i = argument.length - 1; i >= 0; i--) {
  memoire = memoire + argument[i]
}
console.log(memoire)
