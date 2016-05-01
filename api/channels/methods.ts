import {ChannelInterface, Channels} from './channels';
Meteor.methods({
    'channels.addChannel': function(text: string) {
        let channel: ChannelInterface = <ChannelInterface>{name: text, private: false};
        Channels.insert(channel);
    },

    'channels.deleteChannel': function(channelId: string) {
        Channels.remove(channelId);
    },

    'channels.setPrivate': function(channelId: string, setToPrivate: boolean) {
        Channels.update(channelId, {
            $set: {private: setToPrivate}
        });
    }
});