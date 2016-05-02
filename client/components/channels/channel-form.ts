import {Component, Input} from 'angular2/core';
import {ChannelInterface, Channels} from '../../../api/channels/channels.ts'
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'channel-form',
    templateUrl: 'client/components/channels/channel-form.html'
})
export class ChannelForm extends MeteorComponent {

    addChannel(channelName){
        Channels.insert(<ChannelInterface> {
            name: channelName,
            private: false
        })
    }
}
