Template.home.events({
    'keyup textarea' : function(event, instance) {
        var trim = function(str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

        if (event.keyCode == 13 && !event.shiftKey) {
            var value = instance.find('textarea').value;
            value = trim(value);
            instance.find('textarea').value = '';

            DoingStack.insert({
                timestamp: new Date,
                stackItem: value
            });
        }
    },

    'click a#popButton': function(event, instance) {
        // Find last added item and save it
        var last = DoingStack.findOne(
            {},
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
    }
});
