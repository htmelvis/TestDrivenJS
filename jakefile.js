task('default', [], function(){
  console.log('default');
})

desc('Hey example');
//task("nameoftask", [deps], callback());
task('example', function(){
  console.log('example task');
});