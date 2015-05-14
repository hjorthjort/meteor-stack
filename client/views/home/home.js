Template.home.events({
  'keyup textarea' : function(event, instance) {
    if (event.keyCode == 13 && !event.shiftKey) {
      var value = instance.find('textarea').value;
      instance.find('textarea').value = '';

      DoingStack.insert({
          timestamp: new Date,
          stackItem: value
        });
    }
  },

  'click a#popButton': function(event, instance) {
      var last = DoingStack.findOne(
          {},
          {
              sort: {
                  timestamp: -1
              }
          }
      );
      DoingStack.remove(
          { _id: last._id }
      );
      instance.find('textarea').value = last.stackItem;
  }
});
