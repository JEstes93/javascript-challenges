const test = require('tape')
const setinter = require('./setinter')

const a = []
const b = []
const timers = []

const interval = 500;
const allowedVariance = 10;

timers.push(
    ...[
        setInterval(() => {
            a.push(Date.now())
        }, interval),
        setinter(() => { // setinter
            b.push(Date.now())
        }, interval)
    ]
)

test('Equal initial elapsed time difference', {
    timeout: 5000
}, t => {

    t.plan(1)

    setTimeout(() => {
        t.equal(
            (Math.floor(a[1] - a[0]) < allowedVariance),
            (Math.floor(b[1] - b[0]) < allowedVariance),
            'Expects equal elapsed time'
        )
    }, interval * 3)

})

test.onFinish(() => {
    timers.forEach(e => clearInterval(e))
})