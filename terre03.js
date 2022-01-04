const [node, fichier, argument] = process.argv

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const rang = alphabet.indexOf(argument)
let memoire = ""
for (let i = rang; i < alphabet.length; i++) {
  memoire = memoire + alphabet[i]
}
console.log(memoire)
