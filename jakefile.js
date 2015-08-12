task('default', ["lint"]);
desc("Lint everything");
//task("nameoftask", [deps], callback());
task('lint',[], function(){
  var lint = require('./build/lint/lint_runner.js');
  //files, options, globals
  lint.run(['jakefile.js'], {}, {});
});
