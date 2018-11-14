const stackMachineCalculator = (instructions) => {
  let stringArray = instructions.split(' ')
  let stack = []
  for(let i in stringArray) {
    if(!isNaN(stringArray[i])) {
      stack.push(Number(stringArray[i]))
    }
    if(stringArray[i] === "+" || stringArray[i] === "ADD") {
      stack.push(stack.pop() + stack.pop())
    }
    if(stringArray[i] === "-" || stringArray[i] === "SUB") {
      stack.push(stack.pop() - stack.pop())
    }
    if(stringArray[i] === "POP") {
      stack.pop()
    }
    if(stringArray[i] === "DUP") {
      stack.push(stack[stack.length-1])
    }
  }
  return stack.pop()
}

module.exports = stackMachineCalculator
