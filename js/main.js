// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
requirejs.config({
  paths: {
    jquery: 'libs/jquery-1.11.2.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    templates: '../templates'
  }
});
requirejs([
    // Load our app module and pass it to our definition function
    'app',
  ], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});