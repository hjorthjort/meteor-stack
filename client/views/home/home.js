Template.home.events({
  'keyup textarea' : function(event, instance) {
    console.log(event);
    if (event.keyCode == 13 && !event.shiftKey) {
      var value = instance.find('textarea').value;
      instance.find('textarea').value = '';

      DoingStack.insert({stackItem: value});
    }
  }
});
