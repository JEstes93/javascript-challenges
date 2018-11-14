const setInter = (func, interval, ...args) => {
    const callFunction = () => {
        func(...args)
        setTimeout(callFunction, interval)
    }
    setTimeout(callFunction, interval)
}

module.exports = setInter