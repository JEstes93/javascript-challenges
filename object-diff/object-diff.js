const diff = (newCode, oldCode) => {
  const changes = []
  const addDiffs = (sign, prefix, key, val) => {
    if (typeof val !== "object") {
      changes.push([sign,`${prefix}${key}`,val])
      return
    } 
    prefix = `${prefix}${key}.`
    for (entry of Object.entries(val)) {
      const [ key, value ] = entry
      addDiffs(sign, prefix, key, value )
    }
  }

  const compare = (sign, prefix, oldCode, newCode) => {
    for (oldEntry of Object.entries(oldCode)) {
      const [ key, value ] = oldEntry
      if (!newCode.hasOwnProperty(key)) {
        addDiffs(sign, prefix, key, value)
      } else if (typeof newCode[key] === 'object' && typeof value === 'object') {
        compare(sign,`${prefix}${key}.`,value, newCode[key])
      } else if (typeof value !== typeof newCode[key]) {
        addDiffs(sign, prefix, key, value)
      } else if (value !== newCode[key]) {
        addDiffs(sign, prefix, key, value)
      }
    }
  }

  compare("-","",oldCode, newCode)
  compare("+","", newCode, oldCode)
  return changes
}

module.exports = diff
