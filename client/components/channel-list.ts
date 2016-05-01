import {Component, Input} from 'angular2/core';

import {ChannelDetail} from './channel-detail';

import {MeteorComponent} from 'angular2-meteor';

import {ChannelInterface, Channels} from '../../api/channels/channels';

@Component({
  selector: 'channel-list',
  templateUrl: 'client/components/channel-list.html',
  directives: [ChannelDetail]
})
export class TaskList extends MeteorComponent{
  //noinspection JSAnnotator
    channels: Mongo.Cursor<ChannelInterface>;
    isLoading: boolean;

  constructor() {
    super();
    this.isLoading = true;
    this.subscribe('channels.public', () => {
      this.isLoading = false;
      this.channels = Channels.find({});
    }, true);
  }
}
