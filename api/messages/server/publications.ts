import {Messages} from "../messages";
Meteor.publish('messages.channel', function(channelId) {
    return Messages.find({channelId: channelId},{sort: {timestamp: -1}});
});
