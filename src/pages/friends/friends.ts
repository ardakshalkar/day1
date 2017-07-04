import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
	selectedFriend:any;
	username:string;
	friends: Array<{name:string,surname:string,age?:number}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.username = "John Doe";
		this.friends = [{name:"Bill",surname:"Gates",age:45},{name:"Steve",surname:"Jobs"},{name:"Jandos",surname:"Timberlake"}];
  }
	showFriend(event,friend){
		console.log(friend);
		this.selectedFriend = friend;
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}
