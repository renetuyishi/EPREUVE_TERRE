const [node, fichier, argument] = process.argv
if (!isNaN(argument)) {
  if (argument % 2 == 0) {
    console.log("pair")
  } else {
    console.log("impair")
  }
} else {
  console.log("il faut un entier")
}
