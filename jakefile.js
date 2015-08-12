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