import {Pipe} from 'angular2/core';
import {MeteorComponent} from "angular2-meteor/build/index";

@Pipe({
    name: 'avatarUrl',
    pure: false
})
export class AvatarUrlPipe extends MeteorComponent{
    init: boolean= false;
    url: string = "";

    transform(userId: string): string {
        if (!userId){
            return '';
        }
        if(!this.init){
            this.autorun(() =>{
                this.subscribe('allUserNames', () => {
                    let user = Meteor.users.findOne({_id: userId});
                    if (user && user.services && user.services.github && user.services.github.id){
                        this.url = `https://avatars.githubusercontent.com/u/${user.services.github.id}`;
                    }
                }, true);

            });
            this.init = true;

        }
        return this.url;
    }

}