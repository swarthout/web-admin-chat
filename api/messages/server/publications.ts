import {Messages} from "../messages";
Meteor.publish('messages.channel', function(channel) {
    return Messages.find({
        channelId: channel
    });
});
