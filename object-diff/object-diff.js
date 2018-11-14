const diff = (newCode, oldCode) => {
  const changes = []
  for (oldEntry of Object.entries(oldCode)) {
    const [ key, value ] = oldEntry
    if (!newCode.hasOwnProperty(key)) {
      changes.push(['-', key, value])
    }
  }
  for (newEntry of Object.entries(newCode)) {
    const [ key, value ] = newEntry
    if (!oldCode.hasOwnProperty(key)) {
      changes.push(['+', key, value])
    }
  }
  return changes
}

module.exports = diff
