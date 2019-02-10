const types = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "null", "reverse", "draw"]

const colors = ["red", "yellow", "green", "blue"]




const createMainDeck = () => {
  const array = []
  const wild = {
    type: "wild",
    color: "none"
  }
  const wild4 = {
    type: "wild4",
    color: "none"
  }

  for (let x in types) {
    for (let y in colors) {
      if (types[x] === 0) {
        array.push({
          type: types[x],
          color: colors[y]
        })
      } else {
        array.push({
          type: types[x],
          color: colors[y]
        }, {
          type: types[x],
          color: colors[y]
        })
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    array.push(wild)
    array.push(wild4)
  }
  return array
}


module.exports = {
  types: types,
  colors: colors,
  createMainDeck: createMainDeck
}
