import {Tasks} from "../tasks";
Meteor.publish('tasks.public', function() {
    return Tasks.find({
        $or: [
            { private: { $ne: true } },
            { owner: this.userId }
        ]
    });
});
