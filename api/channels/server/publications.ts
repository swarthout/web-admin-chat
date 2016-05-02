import {Channels} from "../channels";

Meteor.publish('channels.public', function() {
    return Channels.find({
        $or: [
            { private: { $ne: true } },
            { owner: this.userId }
        ]
    });
});