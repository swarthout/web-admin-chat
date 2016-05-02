import {Component, Input} from 'angular2/core';
import {Messages, MessageInterface} from '../../../api/messages/messages.ts'
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'message-form',
    templateUrl: 'client/components/messages/message-form.html'
})
export class MessageForm extends MeteorComponent {
    @Input('channel') channel: string;
    addMessage(content){
        console.log(`attempting to insert ${content} to channel ${this.channel}`);
        Messages.insert(<MessageInterface> {
            content: content,
            timestamp: new Date(),
            channelId: this.channel,
            authorId: Meteor.userId()
        })
    }
}
