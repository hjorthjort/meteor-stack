Template.channel.events({
  'keyup textarea' : function(event, instance) {
    if (event.keyCode == 13 && !event.shiftKey) {
      var _id = Router.current().params._id;
      var value = instance.find('textarea').value;
      instance.find('textarea').value = '';

      DoingStack.insert({stackItem: value});
    }
  }
});
