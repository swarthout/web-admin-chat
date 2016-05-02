import {MessageInterface, Messages} from "./messages";
Meteor.methods({
    'messages.addMessage': function (text:string, channel:string) {
        let message: MessageInterface = <MessageInterface>
        {
            content: text,
            timestamp: new Date(),
            channelId: channel,
            authorId: this.userId
        };
        Messages.insert(message);
    },

    'messages.deleteMessage': function (messageId:string) {
        let message: MessageInterface = Messages.findOne(messageId);
        if (message.authorId === this.userId){
            Messages.remove(messageId);
        }
    }
});