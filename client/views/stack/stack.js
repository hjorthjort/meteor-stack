Template.stack.helpers({
    stackitems: function () {
        var found = DoingStack.find(
            {},
            {
                sort: {
                    timestamp: -1
                }
            }
        );
        return found;
    }
});
