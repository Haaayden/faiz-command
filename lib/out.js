const chalk = require('chalk')

module.exports = {
  info(...args) {
    const prefix = chalk.green('[=== FAIZ INFO ===]')
    args.unshift(prefix)
    console.log.apply(console, args)
  },
  warn(...args) {
    const prefix = chalk.yellow('[=== FAIZ WARNING ===]')
    args.unshift(prefix)
    console.log.apply(console, args)
  },
  error(...args) {
    const prefix = chalk.red('[=== FAIZ ERROR ===]')
    args.unshift(prefix)
    console.log.apply(console, args)
  },
}
