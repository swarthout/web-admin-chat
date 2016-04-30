import {IChannel, Channels} from './channels';
Meteor.methods({
    'channels.addChannel': function(text: string) {
        let channel: IChannel = <IChannel>{name: text, private: false};
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