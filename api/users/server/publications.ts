Meteor.publish('allUserNames', function() {
    return Meteor.users.find({}, {fields: {
        "services.github.id": 1,
        "services.github.username": 1,
    }});
});
