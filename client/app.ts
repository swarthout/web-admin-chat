import {Component} from 'angular2/core';

import {Channels} from '../api/channels/channels.ts';
import {ChannelForm} from './components/channels/channel-form';
import {MessageList} from './components/messages/message-list';
import {MessageForm} from './components/messages/message-form';
import {ChannelList} from './components/channels/channel-list';
import {MeteorComponent} from 'angular2-meteor';
import {InjectUser} from 'angular2-meteor-accounts-ui';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ChannelList, ChannelForm, MessageList, MessageForm]
})
@InjectUser('user')
export class AppComponent extends MeteorComponent{
  user: Meteor.User;
  selectedChannel: string;
  addChannel(text) {
    Channels.insert({
      name: text,
      private: false
    });
  }
  signInGithub(){
    Meteor.loginWithGithub({
      requestPermissions: ['user']
    }, function (err) {
      if (err)
        console.error(err);
    });
  }
  logOut(){
    Meteor.logout();
  }
  setSelected(channelName){
    // console.log(`current channel in app: ${channelName}`);
    this.selectedChannel = channelName;
  }
}

