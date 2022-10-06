const path = require('path')
const { spawn } = require('child_process')

;(() => {
  const components = process.argv[2]

  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${components}`)])
})()
