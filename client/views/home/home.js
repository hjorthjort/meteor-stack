Template.home.helpers({
  user: function() {
    return Meteor.users.findOne({_id: this._userId});
  }
});

Template.home.events({
    'keyup textarea' : function(event, instance) {
        var trim = function(str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

        if (event.keyCode == 13 && !event.shiftKey) {
            var value = instance.find('textarea').value;
            value = trim(value);
            instance.find('textarea').value = '';
            if(value.length) {
              console.log(this.userId);
              DoingStack.insert({
                  timestamp: new Date,
                  stackItem: value,
                  _userId: Meteor.userId()
              });
            }
        }
    },

    'click a#popButton': function(event, instance) {
        // Find last added item and save it
        var last = DoingStack.findOne(
            {_userId: this._userId},
            {
                sort: {
                    timestamp: -1
                }
            }
        );
        // Remove it from the collection
        DoingStack.remove(
            { _id: last._id }
        );
        // Set the text areas value to the last found stack item
        instance.find('textarea').value = last.stackItem;
    },

    'click a#doneButton': function(event, instance) {
        var trim = function(str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

        var value = instance.find('textarea').value;
        value = trim(value);
        instance.find('textarea').value = '';
        if(value.length) {
          DoneStack.insert({
              timestamp: new Date,
              stackItem: value
          })
        }
    }
});
