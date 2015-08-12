(function() {
  "use strict";
  /* global desc, task, jake, fail, complete */
  task('default', ["lint"]);
  desc("Lint everything");
//task("nameoftask", [deps], callback());
  task('lint', [], function () {
    var lint = require('./build/lint/lint_runner.js');
    //files, options, globals
    var files = new jake.FileList();
    files.include("**/*.js");
    files.exclude('node_modules');

    lint.run(files.toArray(), nodeLintOptions(), {});
  });
  desc("Integrate");
  task("integrate", ['default'], function(){
    console.log('1. Make sure git status is clean');
    console.log('2. Build on integration box');
    console.log('   a. Walk over to integration box');
    console.log('   b. git pull');
    console.log('   c. jake');
    console.log('3. Git checkout integration');
    console.log('4. git merge master --no-ff --log');
    console.log('5. git checkout master');



    console.log('Integration Logic Goes Here!');
  });
  function nodeLintOptions() {
    return {
      bitwise: true,
      curly: false,
      eqeqeq: true,
      forin: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      noempty: true,
      nonew: true,
      regexp: true,
      undef: true,
      strict: true,
      trailing: true,
      node: true
    };
  }
})();