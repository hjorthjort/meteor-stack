Template.donestack.helpers({
    stackitems: function () {
        var found = DoneStack.find(
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
