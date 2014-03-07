console.log('Time to Twit!');

$(function(){
  Parse.initialize("phwGhKqm6U0MJIlcbfrd0tdWhRqPydU6GXvAwet1", "GFAFBQMttDSPzSG7lFdZIPb9qVdGtSYrsgP1HG7x");

  var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});

})
