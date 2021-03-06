// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

// $(document).ready(function() {
//     console.log('onload ready')
//     c = new App.Collections.Tweeds
//     c.fetch().done(function(){
//         v = new App.Views.TweedCollectionView({collection: c})
//     })
  
// })

$(function(){
	App.tweeds = new App.Collections.Tweeds();
	App.tweedsView = new App.Views.TweedCollectionView({collection: App.tweeds})
	App.tweeds.fetch({reset: true})
})