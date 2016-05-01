import {Pipe} from 'angular2/core';
import {MeteorComponent} from "angular2-meteor/build/index";

@Pipe({
  name: 'displayName',
  pure: false
})
export class DisplayNamePipe extends MeteorComponent{
  init: boolean= false;
  displayName: string = "";

  transform(userId: string): string {
    if (!userId){
      return '';
    }
    if(!this.init){
      this.autorun(() =>{
        this.subscribe('allUserNames', () => {
          let user = Meteor.users.findOne({_id: userId});
          if (user && user.services && user.services.github && user.services.github.username){
            this.displayName = user.services.github.username;
          }
        }, true);

      });
      this.init = true;

    }
    return this.displayName;
  }

}