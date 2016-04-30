import {Component} from 'angular2/core';

import {Channels} from '../api/channels/channels.ts';

import {TaskList} from './components/channel-list';


@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [TaskList]
})
export class AppComponent {
  addChannel(text) {
    Channels.insert({
      name: text,
      private: false
    });
  }
}

