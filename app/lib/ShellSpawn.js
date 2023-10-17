const { spawn } = require("child_process");

module.exports = function (cmdArray, stderrHandler, errorHandler) {
  if (typeof(cmdArray) === "string") {
    cmdArray = cmdArray.split(' ')
  }

  if (typeof(stderrHandler) !== 'function') {
    stderrHandler = function (stderr, reject) {
      //console.log(`[STDERR] ${stderr}`);
	    console.log(`${stderr}`);
      reject(stderr)
      return
    }
  }

  if (typeof(errorHandler) !== 'function') {
    errorHandler = function (error, reject) {
      console.log(`[ERROR]\n${error.message}`)
      reject(error)
      return
    }
  }

  return new Promise(function (resolve, reject) {
    
    let parameters = cmdArray.slice(1)

    // parameters = parameters.map(p => {
    //   if (p.indexOf(' ') > -1 && ((!p.startsWith('"') && !p.endsWith('"')) && (!p.startsWith("'") && !p.endsWith("'")))) {
    //     if (p.indexOf('"') > -1) {
    //       p = `'${p}'`
    //     }
    //     else {
    //       p = `"${p}"`
    //     }
    //   }
    //   return p
    // })

    let job = spawn(cmdArray[0], parameters, { shell: true })


    job.stdout.on("data", data => {
      console.log(`${data}`);
      // return reject()
    });
    
    job.stderr.on("data", data => {
      stderrHandler(`${data}`, reject);
      return reject()
    });
    
    job.on('error', (error) => {
      stderrHandler(`error: ${error.message}`, reject);
      return reject()
    });
    
    job.on("close", code => {
      // console.log(`child process exited with code ${code}`);
      // console.log(code)
      if (code !== 0) {
        return reject(code)
      }
      resolve()
    });
      
  })
}
