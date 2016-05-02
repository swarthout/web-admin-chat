import {Component, Input} from 'angular2/core';
import {MessageInterface} from '../../../api/messages/messages.ts'
import {MeteorComponent} from 'angular2-meteor';
import {DisplayNamePipe} from '../../pipes/display-name';
import {AvatarUrlPipe} from '../../pipes/avatar-url';

@Component({
  selector: 'message',
  templateUrl: 'client/components/messages/message-detail.html',
  pipes: [DisplayNamePipe, AvatarUrlPipe]
})
export class MessageDetail extends MeteorComponent {
  @Input('data') message: MessageInterface;
  constructor(){
    super();
  }
  deleteMessage() {
    this.call('messages.deleteMessage', this.message._id);
  }

  get isOwner(){
    if(this.message && Meteor.userId()){
      return this.message.authorId === Meteor.userId();
    }
    return false;
  }

}

