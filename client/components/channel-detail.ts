import {Component, Input} from 'angular2/core';
import {ChannelInterface} from '../../api/channels/channels.ts'
import {MeteorComponent} from 'angular2-meteor';

@Component({
  selector: 'channel',
  templateUrl: './client/components/channel-detail.html'
})
export class ChannelDetail extends MeteorComponent {
  @Input('data') channel: ChannelInterface;
  messageCount: number = 0;
  setAccess() {
    this.call('channels.setPrivate', this.channel._id,
      !this.channel.private);
  }

  deleteChannel() {
    this.call('channels.deleteChannel', this.channel._id);
  }

  setChannel(){
    
  }
}
