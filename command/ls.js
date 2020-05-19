const Command = require('common-bin')
const Table = require('tty-table')
const fs = require('fs')
const path = require('path')

const out = require('../lib/out')
const CONSTANTS = require('../lib/constants')

const cwd = process.cwd()

class LsCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv)
    this.usage = 'Usage: faiz ls'
  }

  async run({ argv = {} }) {
    const config = require(path.resolve(cwd, CONSTANTS.CONFIG_FILE_NAME))
    console.log(this.renderTable(config.children))

  }

  renderTable(rowsConfig) {
    function noDataFormatter(val) {
      if (val === undefined) return ''
      return val
    }
    const header = [
      {
        value: 'index',
        alias: '序号',
        align: 'left',
        formatter: noDataFormatter,
      },
      {
        value: 'fileName',
        alias: '文件名',
        align: 'left',
      },
      {
        value: 'description',
        alias: '描述',
        align: 'left',
        formatter: noDataFormatter,
      },
      {
        value: 'remark',
        alias: '备注',
        align: 'left',
        formatter: noDataFormatter,
      }
    ]

    const list = fs.readdirSync(cwd)
    const rows = list.map(fileName => {
      if (rowsConfig[fileName]) return rowsConfig[fileName]
      return {
        ...CONSTANTS.DEFAULT_FILE_DATA,
        fileName,
      }
    })

    // const rows = [
    //   {
    //     fileName: '文件名1',
    //     description: '描述 1',
    //   },
    //   {
    //     fileName: '文件名2',
    //     description: '描述 2',
    //   },
    // ]

    return Table(header, rows).render()

  }
}

module.exports = LsCommand
