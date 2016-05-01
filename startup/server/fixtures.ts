import {Channels, ChannelInterface} from "../../api/channels/channels";
import {Messages, MessageInterface} from "../../api/messages/messages";
function seed_app() {
    if (Channels.find({}).count() === 0) {
        for (let i = 1; i <= 10; i++) {
            let channel:ChannelInterface = {
                name: `Channel #${i}`,
                private: false
            };
            let channelId = Channels.insert(channel);
            if (Messages.find({channelId: channelId}).count() === 0) {
                let user = Meteor.users.findOne({});
                for (let j = 1; j <= 10; j++) {
                    let message:MessageInterface = {
                        content: `Message #${j}`,
                        timestamp: new Date(),
                        channelId: channelId,
                        authorId: user? user._id: "12345"
                    };
                    Messages.insert(message);
                }
            }
        }

    }
}

Meteor.startup(() => seed_app());