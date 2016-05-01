import {Component, Input, OnChanges, SimpleChange} from "angular2/core";
import {MessageDetail} from "./message-detail";
import {MeteorComponent} from "angular2-meteor";
import {MessageInterface, Messages} from "../../../api/messages/messages";

@Component({
    selector: 'message-list',
    templateUrl: 'client/components/messages/message-list.html',
    directives: [MessageDetail]
})
export class MessageList extends MeteorComponent implements OnChanges {
    //noinspection JSAnnotator
    messages:Mongo.Cursor<MessageInterface>;
    isLoading:boolean;
    @Input('channel') channel:string;
    selectedChannel:ReactiveVar<string> = new ReactiveVar<string>("GkcRTkkgKk6djaYhk");

    constructor() {
        super();
        this.isLoading = true;
        this.autorun(() => {
            let options = this.selectedChannel.get();
            this.subscribe('messages.channel', options, () => {
                this.messages = Messages.find({},{sort: {timestamp: -1}});
                // this.isLoading = this.messages ? false : true;
                this.isLoading = false;
            }, true);
        });

    }

    ngOnChanges(changes:{[channel:string]:SimpleChange}) {
        // console.log(`new selected channel in message list: ${changes['channel'].currentValue}`);
        this.selectedChannel.set(changes['channel'].currentValue);
    }

}
