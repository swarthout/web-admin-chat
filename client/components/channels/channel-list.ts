import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {ChannelDetail} from './channel-detail';

import {MeteorComponent} from 'angular2-meteor';

import {ChannelInterface, Channels} from '../../../api/channels/channels';

@Component({
  selector: 'channel-list',
  templateUrl: 'client/components/channels/channel-list.html',
  directives: [ChannelDetail]
})
export class ChannelList extends MeteorComponent{
  //noinspection JSAnnotator
    channels: Mongo.Cursor<ChannelInterface>;
    @Output() selected: EventEmitter<string> = new EventEmitter();
    selectedChannel;
    isLoading: boolean;

  constructor() {
    super();
    this.isLoading = true;
    this.subscribe('channels.public', () => {
      this.isLoading = false;
      this.channels = Channels.find({});
    }, true);
  }
  setSelected(channelName: string){
    // console.log(`current channel in channel list: ${channelName}`);
    this.selectedChannel=channelName;
    this.selected.emit(channelName);
  }
}
