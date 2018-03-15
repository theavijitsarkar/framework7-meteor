
//either set root for blaze or set root for framework7
// BlazeLayout.setRoot('body');




  FlowRouter.route('/', {
      name: 'home',
      action: function (params, queryParams) {
        BlazeLayout.render('home', { main: 'Page1' });
      }
  });
  
  FlowRouter.route('/page2', {
    name: 'Page2',
    action: function (params, queryParams) {
          BlazeLayout.render('home', { main: 'Page2' });
    }
  })


  if (Meteor.isClient) {
    Transitioner.setTransitions({
      'home->Page2': 'right-to-left',
      'Page2->home': 'left-to-right',
    
      'default': 'fade'
    });
  } 

/*
  FlowTransition.addTransition({
    section: 'body',
    from: 'page1',
    to: 'page2',
    txFull: 'left' // direction of motion, content will be moving left
  });


  FlowTransition.addTransition({
    section: 'body',
    from: 'page2',
    to: 'page1',
    txFull: 'right' // direction of motion, content will be moving right
  });*/
