console.log('Time to Twit!');

$(function(){
  Parse.initialize("phwGhKqm6U0MJIlcbfrd0tdWhRqPydU6GXvAwet1", "GFAFBQMttDSPzSG7lFdZIPb9qVdGtSYrsgP1HG7x");

  // var pizzaBurger = new Burger;
  // pizzaBurger.set('breadType', 'soggyish')
  // pizzaBurger.save({name: 'Pizza Burger'})

  window.burgers = new BurgersCollection();
  burgers.fetch();
})
