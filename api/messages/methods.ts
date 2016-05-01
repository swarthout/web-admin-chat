import {MessageInterface, Messages} from "./messages";
Meteor.methods({
    'messages.addMessage': function (text:string, channel: string) {
        let channel:MessageInterface = <MessageInterface>
        {
            content: text,
            timestamp: new Date(),
            channelId: channel,
            authorId: this.userId
        };
        Messages.insert(channel);
    },

    'messages.deleteMessage': function (messageId:string) {
        Messages.remove(messageId);
    }
});