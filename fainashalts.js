if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button#POC").click(function(){
      $("ul#poc").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button#PLNLA").click(function(){
      $("ul#plnla").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button#CC").click(function(){
      $("ul#cc").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button#blog").click(function(){
      $("ul#blog").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button.description-plnla").click(function(){
      $("p.description-plnla").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button.description-poc").click(function(){
      $("p.description-poc").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button.description-cc").click(function(){
      $("p.description-cc").toggle();
    });
  });
}

if (Meteor.isClient) {
  Meteor.startup(function(){
    $("button.description-blog").click(function(){
      $("p.description-blog").toggle();
    });
  });
}

