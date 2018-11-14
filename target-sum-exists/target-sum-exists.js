const targetSumExistsInTwoNumbers = (list, target) => {
  for(let i = 0; i <= list.length; i++) {
    for(let j = 0; j <= list.length; j++) {
      if(list[i] + list[j] === target) {
        return true
      }
    }
  }
  return false
}

const targetSumExistsInThreeNumbers = (list, target) => {
  for(let i = 0; i <= list.length; i++) {
    for(let j = 0; j <= list.length; j++) {
      for(let k = 0; k <= list.length; k++) {
        if(list[i] + list[j] + list[k] === target) {
          return true
        }
      }
    }
  }
  return false
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
