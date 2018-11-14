const addEventing = function (obj) {
  obj.events = {}
  obj.on = (name, func) => {
    if (!obj.events.hasOwnProperty(name)) {
      obj.events[name] = []
    }
    obj.events[name].push(func)
  }
  obj.trigger = (name, ...args) => {
    if (obj.events.hasOwnProperty(name)) {
      for (let event of obj.events[name]) {
        event(args)
      }
    }
  }

  return obj
}

module.exports = addEventing
