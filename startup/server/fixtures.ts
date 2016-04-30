import {Channels, IChannel} from '../../api/channels/channels';

function seed_channels(){
    if(Channels.find({}).count() === 0 ){
        for (let i = 1; i<=10; i++){
            let channel: IChannel = {
                name: `Channel # ${i}`,
                private: false
            };
            Channels.insert(channel);
        }
    }
}

Meteor.startup(() => seed_channels());