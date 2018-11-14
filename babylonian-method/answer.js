const squareRoot = radicand => {
  if (!(typeof radicand === 'number' && radicand >= 0 && !isNaN(radicand))) {
    return NaN
  } else if (radicand === 0) {
    return 0
  } else if (radicand === Infinity) {
    return Infinity
  }
  let value = radicand
  while (true) {
    let last = value

    value = (value + radicand / value) * 0.5
    if (Math.abs(value - last) < 1e-9) {
      break
    }
  }
  return value
}

module.exports = squareRoot
