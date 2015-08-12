"use strict";
/* global desc, task, jake, fail, complete */
task('default', ["lint"]);
desc("Lint everything");
//task("nameoftask", [deps], callback());
task('lint',[], function(){
  var lint = require('./build/lint/lint_runner.js');
  //files, options, globals
  var files = new jake.FileList();
  files.include("**/*.js");
  files.exclude('node_modules');

  var options = {
    node: true
  };

  lint.run(files.toArray(), options, {});
});
