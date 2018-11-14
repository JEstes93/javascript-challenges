const all = (promises) => new Promise((resolve, reject) => {
  const values = []
  const getValue = (promise,i) => {
    if (!promise) {
      resolve(values)
    } else {
      promise.then(v => {
        values.push(v)
      }).catch(e => values.push(e))
      .finally(() => {
        i++
        getValue(promises[i],i)
      })
    }
  }
  getValue(promises[0],0)
})

module.exports = all
