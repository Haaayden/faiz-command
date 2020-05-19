const Command = require('common-bin')
const path = require('path')

class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv)
    this.usage = 'Usage: Faiz <command>'

    this.load(path.join(__dirname, 'command'))
  }
}

module.exports = MainCommand
